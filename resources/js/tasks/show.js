import Vue from 'vue'
import TaskEdit from './components/TaskEdit'
import TaskForm from './components/TaskForm'
import TaskView from './components/TaskView'
import AvatarImage from '../components/AvatarImage'
import MonacoEditor from "vue-monaco";
import debounce from 'lodash/debounce';
import Timeline from '../components/Timeline';
import TimelineItem from '../components/TimelineItem';

Vue.component('task-from', TaskForm);
Vue.component('task-view', TaskView);
Vue.component('avatar-image', AvatarImage);
Vue.component('monaco-editor', MonacoEditor);
Vue.component('timeline', Timeline);
Vue.component('timeline-item', TimelineItem);
window.debounce = debounce;

new Vue({
    render: h => h(TaskEdit)
}).$mount("#task");
