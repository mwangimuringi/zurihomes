<script>
import vue2Dropzone from "vue2-dropzone";

/**
 * Task-detail component
 */
export default {
    head() {
        return {
            title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`,
        };
    },
    components: {
        vueDropzone: vue2Dropzone,
    },
    data() {
        return {
            title: "Task Detail",
            items: [{
                    text: "Minton",
                    href: "/",
                },
                {
                    text: "Apps",
                    href: "/",
                },
                {
                    text: "Task Detail",
                    active: true,
                },
            ],
            dropzoneOptions: {
                url: "https://httpbin.org/post",
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                headers: {
                    "My-Awesome-Header": "header value",
                },
                previewTemplate: this.template(),
            },
        };
    },
    methods: {
        template: function () {
            return ` <div class="dropzone-previews mt-3">
            <div class="card mt-1 mb-0 shadow-none border">
                <div class="p-2">
                    <div class="row align-items-center">
                        <div class="col-auto">
                            <img data-dz-thumbnail src="#" class="avatar-sm rounded bg-light" alt="">
                        </div>
                        <div class="col pl-0">
                            <a href="javascript:void(0);" class="text-muted font-weight-bold" data-dz-name></a>
                            <p class="mb-0" data-dz-size></p>
                        </div>
                        <div class="col-auto">
                            <!-- Button -->
                            <a href="" class="btn btn-link btn-lg text-muted" data-dz-remove>
                                <i class="fe-x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        },
    },
    middleware: "auth",
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
        <div class="col-lg-8">
            <div class="card">
                <div class="card-body">
                    <b-dropdown class="float-right" right toggle-class="text-muted p-0" variant="black">
                        <template v-slot:button-content>
                            <i class="mdi mdi-dots-horizontal font-18"></i>
                        </template>
                        <!-- item-->
                        <b-dropdown-item>
                            <i class="mdi mdi-attachment mr-1"></i>Attachment
                        </b-dropdown-item>
                        <!-- item-->
                        <b-dropdown-item>
                            <i class="mdi mdi-pencil-outline mr-1"></i>Edit
                        </b-dropdown-item>
                        <!-- item-->
                        <b-dropdown-item>
                            <i class="mdi mdi-content-copy mr-1"></i>Mark as Duplicate
                        </b-dropdown-item>
                        <div class="dropdown-divider"></div>
                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item text-danger">
                            <i class="mdi mdi-delete-outline mr-1"></i>Delete
                        </a>
                        <!-- end dropdown menu-->
                    </b-dropdown>
                    <p class="text-primary">#MN2048</p>
                    <h4 class="mb-1">Minton admin Dashboard Re-design</h4>
                    <p class="text-muted mb-1">If several languages coalesce of the resulting language is more simple than the existing</p>

                    <div class="text-muted">
                        <div class="row">
                            <div class="col-lg-4 col-sm-6">
                                <div class="media mt-3">
                                    <div class="mr-2 align-self-center">
                                        <i class="ri-hashtag h2 m-0 text-muted"></i>
                                    </div>
                                    <div class="media-body overflow-hidden">
                                        <p class="mb-1">Task ID</p>
                                        <h5 class="mt-0 text-truncate">#MN2048</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="media mt-3">
                                    <div class="mr-2 align-self-center">
                                        <img src="~/assets/images/users/avatar-2.jpg" alt class="avatar-sm rounded-circle" />
                                    </div>
                                    <div class="media-body overflow-hidden">
                                        <p class="mb-1">Assign to</p>
                                        <h5 class="mt-0 text-truncate">Darnell McCormick</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="media mt-3">
                                    <div class="mr-2 align-self-center">
                                        <i class="ri-calendar-event-line h2 m-0 text-muted"></i>
                                    </div>
                                    <div class="media-body overflow-hidden">
                                        <p class="mb-1">Due Date</p>
                                        <h5 class="mt-0 text-truncate">Today 10am</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4">
                        <div>
                            <h5>Overview:</h5>
                            <p class="text-muted">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up.</p>
                            <div class="mt-3">
                                <h5>Tags :</h5>
                                <div>
                                    <a href="#" class="badge badge-soft-primary p-1 m-1">Photoshop</a>
                                    <a href="#" class="badge badge-soft-primary p-1 m-1">Html</a>
                                    <a href="#" class="badge badge-soft-primary p-1 m-1">Css</a>
                                    <a href="#" class="badge badge-soft-primary p-1 m-1">Bootstrap</a>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4">
                            <h5>Checklists/Sub-tasks</h5>
                            <div class="custom-control custom-checkbox mt-1">
                                <input type="checkbox" class="custom-control-input" id="checklist1" />
                                <label class="custom-control-label strikethrough" for="checklist1">Find out the old contract documents</label>
                            </div>

                            <div class="custom-control custom-checkbox mt-1">
                                <input type="checkbox" class="custom-control-input" id="checklist2" />
                                <label class="custom-control-label strikethrough" for="checklist2">Organize meeting sales associates to understand need in detail</label>
                            </div>

                            <div class="custom-control custom-checkbox mt-1">
                                <input type="checkbox" class="custom-control-input" id="checklist3" />
                                <label class="custom-control-label strikethrough" for="checklist3">Make sure to cover every small details</label>
                            </div>
                            <!-- end sub tasks/checklists -->
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <b-dropdown class="float-right" right toggle-class="text-muted p-0" variant="black">
                        <template v-slot:button-content>
                            <i class="mdi mdi-dots-horizontal font-18"></i>
                        </template>
                        <!-- item-->
                        <b-dropdown-item>
                            <i class="mdi mdi-attachment mr-1"></i>Attachment
                        </b-dropdown-item>
                        <!-- item-->
                        <b-dropdown-item>
                            <i class="mdi mdi-pencil-outline mr-1"></i>Edit
                        </b-dropdown-item>
                        <!-- item-->
                        <b-dropdown-item>
                            <i class="mdi mdi-content-copy mr-1"></i>Mark as Duplicate
                        </b-dropdown-item>
                        <div class="dropdown-divider"></div>
                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item text-danger">
                            <i class="mdi mdi-delete-outline mr-1"></i>Delete
                        </a>
                        <!-- end dropdown menu-->
                    </b-dropdown>
                    <!-- end dropdown-->
                    <h5 class="header-title mb-3">Attachments</h5>

                    <div class="row">
                        <div class="col-md-6">
                            <div>
                                <vue-dropzone id="dropzone" ref="myVueDropzone" :use-custom-slot="true" :options="dropzoneOptions">
                                    <div class="dz-message needsclick">
                                        <i class="h2 text-muted ri-upload-2-line d-inline-block"></i>
                                        <h4>Drop files here or click to upload.</h4>
                                    </div>
                                </vue-dropzone>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="mt-4 mt-md-0">
                                <div class="card mb-2">
                                    <div class="p-2">
                                        <div class="row align-items-center">
                                            <div class="col-auto">
                                                <div class="avatar-sm">
                                                    <span class="avatar-title badge-soft-primary text-primary rounded">ZIP</span>
                                                </div>
                                            </div>
                                            <div class="col pl-0">
                                                <a href="javascript:void(0);" class="text-muted font-weight-semibold">Minton-sketch-design.zip</a>
                                                <p class="mb-0 font-12">2.3 MB</p>
                                            </div>
                                            <div class="col-auto">
                                                <!-- Button -->
                                                <a href="javascript:void(0);" class="btn btn-link font-16 text-muted">
                                                    <i class="ri-download-2-line"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card mb-0">
                                    <div class="p-2">
                                        <div class="row align-items-center">
                                            <div class="col-auto">
                                                <div class="avatar-sm">
                                                    <span class="avatar-title bg-secondary rounded">.MP4</span>
                                                </div>
                                            </div>
                                            <div class="col pl-0">
                                                <a href="javascript:void(0);" class="text-muted font-weight-semibold">Admin-bug-report.mp4</a>
                                                <p class="mb-0 font-12">7.05 MB</p>
                                            </div>
                                            <div class="col-auto">
                                                <!-- Button -->
                                                <a href="javascript:void(0);" class="btn btn-link font-16 text-muted">
                                                    <i class="ri-download-2-line"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Preview -->
                                <div class="dropzone-previews mt-2" id="file-previews"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                    <div class="float-right">
                        <select class="custom-select custom-select-sm">
                            <option selected>Recent</option>
                            <option value="1">Most Helpful</option>
                            <option value="2">High to Low</option>
                            <option value="3">Low to High</option>
                        </select>
                    </div>
                    <!-- end dropdown-->

                    <h4 class="mb-4 mt-0 font-16">Comments (51)</h4>

                    <div class="clerfix"></div>

                    <div class="media">
                        <img class="mr-2 rounded-circle" src="~/assets/images/users/avatar-3.jpg" alt="Generic placeholder image" height="32" />
                        <div class="media-body">
                            <h5 class="mt-0">
                                Barry Gould
                                <small class="text-muted float-right">5 hours ago</small>
                            </h5>Nice work, makes me think of The Money Pit.
                            <br />
                            <a href="javascript: void(0);" class="text-muted font-13 d-inline-block mt-2">
                                <i class="mdi mdi-reply"></i> Reply
                            </a>

                            <div class="media mt-3">
                                <a class="pr-2" href="#">
                                    <img src="~/assets/images/users/avatar-4.jpg" class="rounded-circle" alt="Generic placeholder image" height="32" />
                                </a>
                                <div class="media-body">
                                    <h5 class="mt-0">
                                        Louis Hill
                                        <small class="text-muted float-right">3 hours ago</small>
                                    </h5>i'm in the middle of a timelapse animation myself! (Very different though.) Awesome stuff.
                                    <br />
                                    <a href="javascript: void(0);" class="text-muted font-13 d-inline-block mt-2">
                                        <i class="mdi mdi-reply"></i> Reply
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="media mt-3">
                        <img class="mr-2 rounded-circle" src="~/assets/images/users/avatar-5.jpg" alt="Generic placeholder image" height="32" />
                        <div class="media-body">
                            <h5 class="mt-0">
                                Aaron Wilson
                                <small class="text-muted float-right">1 day ago</small>
                            </h5>It would be very nice to have.
                            <br />
                            <a href="javascript: void(0);" class="text-muted font-13 d-inline-block mt-2">
                                <i class="mdi mdi-reply"></i> Reply
                            </a>
                        </div>
                    </div>

                    <div class="text-center mt-2">
                        <a href="javascript:void(0);" class="text-danger">
                            <i class="mdi mdi-spin mdi-loading mr-1"></i> Load more
                        </a>
                    </div>

                    <div class="border rounded mt-4">
                        <form action="#" class="comment-area-box">
                            <textarea rows="3" class="form-control border-0 resize-none" placeholder="Your comment..."></textarea>
                            <div class="p-2 bg-light d-flex justify-content-between align-items-center">
                                <div>
                                    <a href="#" class="btn btn-sm px-1 btn-light">
                                        <i class="mdi mdi-upload"></i>
                                    </a>
                                    <a href="#" class="btn btn-sm px-1 btn-light">
                                        <i class="mdi mdi-at"></i>
                                    </a>
                                </div>
                                <button type="submit" class="btn btn-sm btn-success">
                                    <i class="uil uil-message mr-1"></i>Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <!-- end .border-->
                </div>
                <!-- end card-body-->
            </div>
            <!-- end card-->
        </div>
    </div>
    <!-- end row -->

    <!-- file preview template -->
    <div class="d-none" id="uploadPreviewTemplate">
        <div class="card mb-2 shadow-none border">
            <div class="p-2">
                <div class="row align-items-center">
                    <div class="col-auto">
                        <img data-dz-thumbnail src="#" class="avatar-sm rounded bg-light" alt />
                    </div>
                    <div class="col pl-0">
                        <a href="javascript:void(0);" class="text-muted font-weight-bold" data-dz-name></a>
                        <p class="mb-0" data-dz-size></p>
                    </div>
                    <div class="col-auto">
                        <!-- Button -->
                        <a href class="btn btn-link btn-lg text-muted" data-dz-remove>
                            <i class="fe-x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
