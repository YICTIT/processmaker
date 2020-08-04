<template>
    <div id="tab-form" role="tabpanel" aria-labelledby="tab-form" class="tab-pane active show h-100">
        <template v-if="taskIsOpenOrOverdue">
            <div class="card card-body border-top-0 h-100">
                <template v-if="task.component">
                    <component
                        :is="task.component"
                        ref="taskScreen"
                        :process-id="task.process_id"
                        :instance-id="task.process_request_id"
                        :token-id="task.id"
                        :screen="task.screen.config"
                        :csrf-token="csrf_token"
                        :computed="task.screen.computed"
                        :custom-css="task.screen.custom_css"
                        :watchers="task.screen.watchers"
                        :data="task.request_data"
                        @activity-assigned="activityAssigned"
                        @process-completed="redirectWhenProcessCompleted"
                        @process-updated="refreshWhenProcessUpdated"
                    ></component>
                </template>
                <template v-else>
                    <task-form
                        ref="taskScreen"
                        :process-id="task.process_id"
                        :instance-id="task.process_request_id"
                        :token-id="task.id"
                        :screen="[{items:[]}]"
                        :data="task.request_data"
                        @activity-assigned="activityAssigned"
                        @process-completed="redirectWhenProcessCompleted"
                        @process-updated="refreshWhenProcessUpdated"
                    ></task-form>
                </template>
            </div>
            <div v-if="task.bpmn_tag_name === 'manualTask' || !task.screen" class="card-footer">
                <button type="button" class="btn btn-primary" @click="submitTaskScreen">{{$t('Complete Task')}}</button>
            </div>
        </template>
        <template v-if="taskIsCompleted">
            <div class="card card-body border-top-0 h-100">
            <task-form
                ref="taskWaitScreen"
                v-if="task.allow_interstitial"
                :process-id="task.process_id"
                :instance-id="task.process_request_id"
                :token-id="task.id"
                :screen="task.interstitial_screen.config"
                :computed="task.interstitial_screen.computed"
                :custom-css="task.interstitial_screen.custom_css"
                :watchers="task.interstitial_screen.watchers"
                :data="task.request_data"
                @activity-assigned="activityAssigned"
                @process-completed="redirectWhenProcessCompleted"
                @process-updated="refreshWhenProcessUpdated"
            ></task-form>
            <div v-else class="card card-body text-center" v-cloak>
                <h1>{{ $t('Task Completed') }} <i class="fas fa-clipboard-check"></i></h1>
            </div>
            </div>
        </template>
        <div v-if="taskHasComments">
            <timeline 
                :commentable_id="task.id"
                commentable_type="ProcessMaker\Models\ProcessRequestToken"
                :reactions="taskHasComments.reactions"
                :voting="taskHasComments.voting"
                :edit="taskHasComments.edit_comments"
                :remove="taskHasComments.remove_comments"
                :adding="taskHasComments.comments"
                :readonly="task.status === 'CLOSED'"
            />
        </div>
    </div>
</template>

<script>
    export default {
        props: ['task', 'csrf_token'],
        computed: {
            taskHasComments() {
                const commentsPackage = 'comment-editor' in Vue.options.components;
                let config = {};
                if (commentsPackage && this.task.definition && this.task.definition.config) {
                    config = JSON.parse(this.task.definition.config);
                }
                return config;
            },
            taskIsCompleted() {
                return this.task.advanceStatus === 'completed' || this.task.advanceStatus === 'triggered';
            },
            taskIsOpenOrOverdue() {
                return this.task.advanceStatus === 'open' || this.task.advanceStatus === 'overdue';
            },
        },
        methods: {
            activityAssigned() {
                this.checkTaskStatus();
                this.redirectToNextAssignedTask(false);
            },
            reload() {
                this.loadTask(this.task.id);
            },
            loadTask(id) {
                window.ProcessMaker.apiClient
                .get(`/tasks/${id}?include=data,user,requestor,processRequest,component,screen,requestData,bpmnTagName,interstitial,definition`)
                .then((response) => {
                    this.$parent.$emit('updateTask', response.data);
                    if (response.data.process_request.status === 'ERROR') {
                        this.hasErrors = true;
                    }
                    this.prepareTask();
                });
            },
            redirectWhenProcessCompleted() {
                window.location.href = `/requests/${this.task.process_request_id}`;
            },
            refreshWhenProcessUpdated(data) {
                if (data.event === 'ACTIVITY_COMPLETED' || data.event === 'ACTIVITY_ACTIVATED') {
                    this.reload();
                }
            },
            checkTaskStatus(redirect=false) {
                if (this.task.status == 'COMPLETED' || this.task.status == 'CLOSED' || this.task.status == 'TRIGGERED') {
                    this.closeTask();
                }
            },
            closeTask() {
                if (this.hasErrors) {
                    window.location.href = `/requests/${this.task.process_request_id}`;
                    return;
                }
                if (!this.task.allow_interstitial) {
                    document.location.href = "/tasks";
                } else {
                    this.redirectToNextAssignedTask();
                }
            },
            redirectToNextAssignedTask(redirect = false) { 
                if (this.task.status == 'COMPLETED' || this.task.status == 'CLOSED' || this.task.status == 'TRIGGERED') {
                    window.ProcessMaker.apiClient.get(`/tasks?user_id=${this.task.user_id}&status=ACTIVE&process_request_id=${this.task.process_request_id}`).then((response) => {
                    if (response.data.data.length > 0) {
                        const firstNextAssignedTask = response.data.data[0].id;
                        if (redirect) {
                        window.location.href = `/tasks/${firstNextAssignedTask}/edit`;
                        } else {
                        this.loadTask(firstNextAssignedTask);
                        }
                    } else if (this.task.process_request.status === 'COMPLETED') {
                        setTimeout(() => {
                        window.location.href = `/requests/${this.task.process_request_id}`;
                        }, 500);
                    }
                    });
                }
            },
            /**
             * Submit the task screen
             */
            submitTaskScreen() {
                this.$refs.taskScreen.submit();
            },
            classHeaderCard (status) {
                let header = "bg-success";
                switch (status) {
                    case "completed":
                    header = "bg-secondary";
                    break;
                    case "overdue":
                    header = "bg-danger";
                    break;
                }
                return "card-header text-capitalize text-white " + header;
            },
            prepareTask(redirect = false) {
                this.statusCard = this.classHeaderCard(this.task.advanceStatus);
                this.checkTaskStatus(redirect);
            },
        },
        mounted () {
            this.prepareTask(true);
        }
    }
</script>