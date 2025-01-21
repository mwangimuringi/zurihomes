<script>
import {
    required
} from "vuelidate/lib/validators";

/**
 * Todo component
 */
export default {
    data() {
        return {
            todoData: [{
                    id: 1,
                    todo: "Vue Admin & Dashboard",
                    done: false,
                },
                {
                    id: 2,
                    todo: "Build an angular app",
                    done: true,
                },
                {
                    id: 3,
                    todo: "Create new version 3.0",
                    done: false,
                },
                {
                    id: 4,
                    todo: "Hehe!! This looks cool!",
                    done: false,
                },
                {
                    id: 5,
                    todo: "Testing??",
                    done: true,
                },
                {
                    id: 6,
                    todo: "Creating component page",
                    done: true,
                },
                {
                    id: 7,
                    todo: "Build a js based app",
                    done: true,
                },
                {
                    id: 8,
                    todo: "Design One page theme",
                    done: false,
                },
            ],
            todolist: {
                todo: "",
            },
            todoSubmitted: false,
        };
    },
    validations: {
        todolist: {
            todo: {
                required,
            },
        },
    },
    computed: {
        /**
         * return completed todo
         */
        completedTodo() {
            return this.todoData.filter((t) => t.done === false);
        },
    },
    methods: {
        /**
         * Todo form submit
         */
        saveTodo() {
            this.todoSubmitted = true;
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            } else {
                var id = this.todoData.length;
                const todo = this.todolist.todo;
                // Value Push in Todo
                this.todoData.push({
                    id: id + 1,
                    todo,
                });
            }
            this.todoSubmitted = false;
            this.todolist = {};
        },

        /**
         * Check box value change
         */
        updateCheck(index) {
            this.todoData[index].done = !this.todoData[index].done;
        },

        /**
         * Hide Selected todo
         */
        archiveTodo() {
            this.todoData = this.todoData.filter((x) => x.done === false);
        },
    },
};
</script>

<template>
<div class="card">
    <div class="card-body">
        <b-dropdown class="float-right" toggle-class="card-drop p-0" variant="black" right>
            <template v-slot:button-content>
                <i class="mdi mdi-dots-vertical"></i>
            </template>
            <!-- item-->
            <b-dropdown-item>Settings</b-dropdown-item>
            <!-- item-->
            <b-dropdown-item>Action</b-dropdown-item>
        </b-dropdown>
        <h4 class="header-title mb-3">Todo</h4>
        <div class="todoapp">
            <div class="row align-items-center">
                <div class="col-sm-6">
                    <h5 id="todo-message">
                        <span id="todo-remaining">{{ completedTodo.length }}</span> of
                        <span id="todo-total">{{ todoData.length }}</span> remaining
                    </h5>
                </div>
                <div class="col-sm-6">
                    <a href="javascript: void(0);" class="float-right btn btn-light btn-xs" @click="archiveTodo">Archive</a>
                </div>
            </div>
            <simplebar style="max-height: 275px;">
                <div>
                    <ul id="todo-list" class="list-group list-group-flush todo-list" style="max-height: 320px">
                        <li class="list-group-item border-0 pl-0" v-for="(todo, index) in todoData" :key="index">
                            <div class="custom-control custom-checkbox"><input type="checkbox" :id="`${todo.id}`" :checked="`${todo.done ? true : ''}`" @change="updateCheck(index)" class="custom-control-input todo-done">
                                <label class="custom-control-label" :for="`${todo.id}`"> <s v-if="todo.done === true">{{ todo.todo }}</s>
                                    <span v-else>{{ todo.todo }}</span> </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </simplebar>
            <form @submit.prevent="saveTodo" class="mt-3">
                <div class="row">
                    <div class="col">
                        <input v-model="todolist.todo" type="text" class="form-control" placeholder="Add new todo" name="todo" :class="{
                  'is-invalid': todoSubmitted && $v.todolist.todo.$error
                }" />
                        <div v-if="todoSubmitted && !$v.todolist.todo.required" class="invalid-feedback">This value is required.</div>
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary width-sm btn-md btn-block">Add</button>
                    </div>
                </div>
                <!-- end row -->
            </form>
            <!-- end form -->
        </div>
    </div>
</div>
</template>
