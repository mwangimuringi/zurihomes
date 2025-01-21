<script>
import {
    required
} from 'vuelidate/lib/validators'

/**
 * Chat-widget component
 */
export default {
    data() {
        return {
            chats: {
                message: '',
            },
            submitform: false,
            chatData: [{
                    id: 1,
                    image: require('~/assets/images/users/avatar-1.jpg'),
                    name: 'John Deo',
                    message: 'Hello!',
                    time: '10:00',
                },
                {
                    id: 2,
                    image: require('~/assets/images/users/avatar-5.jpg'),
                    name: 'Smith',
                    message: 'Hi, How are you? What about our next meeting?',
                    time: '10:01',
                },
                {
                    id: 3,
                    image: require('~/assets/images/users/avatar-1.jpg'),
                    name: 'John Deo',
                    message: 'Yeah everything is fine',
                    time: '10:01',
                },
                {
                    id: 4,
                    image: require('~/assets/images/users/avatar-5.jpg'),
                    name: 'Smith',
                    message: "Wow that's great",
                    time: '10:02',
                },
                {
                    id: 5,
                    image: require('~/assets/images/users/avatar-1.jpg'),
                    name: 'John Deo',
                    message: 'Yup!',
                    time: '10:03',
                },
            ],
        }
    },
    validations: {
        chats: {
            message: {
                required
            },
        },
    },
    methods: {
        /**
         * Chat form submit
         */
        saveMessage() {
            this.submitform = true

            // stop here if form is invalid
            this.$v.$touch()
            if (this.$v.$invalid) {
                return
            } else {
                var id = this.chatData.length
                const message = this.chats.message
                const currentDate = new Date()

                // Message Push in Chat
                this.chatData.push({
                    image: require('~/assets/images/users/avatar-5.jpg'),
                    id: id + 1,
                    name: 'Smith',
                    message,
                    time: currentDate.getHours() + ':' + currentDate.getMinutes(),
                })
            }
            this.submitform = false
            this.chats = {}
        },
    },
}
</script>

<template>
<div class="card">
    <div class="card-body">
        <h4 class="header-title mb-3">Chat</h4>
        <simplebar style="max-height: 357px;">
            <div class="chat-conversation">
                <ul class="conversation-list">
                    <li v-for="chat in chatData" :key="chat.id" :class="{ 'odd': (`${chat.name}` === 'Smith') }" class="clearfix">
                        <div class="chat-avatar">
                            <img :src="`${chat.image}`" alt="male" />
                            <i>{{chat.time}}</i>
                        </div>
                        <div class="conversation-text">
                            <div class="ctext-wrap">
                                <i>{{chat.name}}</i>
                                <p>{{chat.message}}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </simplebar>
        <form @submit.prevent="saveMessage">
            <div class="row mt-2">
                <div class="col-lg-9">
                    <input id="message" v-model="chats.message" type="text" class="form-control" placeholder="Enter your text" name="message" :class="{ 'is-invalid': submitform && $v.chats.message.$error }" />
                    <div v-if="submitform && !$v.chats.message.required" class="invalid-feedback">This value is required.</div>
                </div>

                <div class="col-lg-3">
                    <button type="submit" class="btn btn-danger chat-send btn-block">Send</button>
                </div>
            </div>
            <!-- end row -->
        </form>
        <!-- end form -->
    </div>

</div>
</template>
