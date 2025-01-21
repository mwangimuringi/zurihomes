<script>
/**
 * File-manager component
 */
export default {
    head() {
        return {
            title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`,
        };
    },
    data() {
        return {
            title: 'File Manager',
            items: [{
                    text: 'Minton',
                    href: '/',
                },
                {
                    text: 'Apps',
                    href: '/',
                },
                {
                    text: 'File Manager',
                    active: true,
                },
            ],
            fileManagerData: [{
                    icon: require('~/assets/images/file-icons/pdf.svg'),
                    name: 'Invoice-project.pdf',
                    date: '17-Jan-18 2:55 PM',
                    size: '2.31 MB',
                    users: [require('~/assets/images/users/avatar-4.jpg'), require('~/assets/images/users/avatar-6.jpg')]
                },
                {
                    icon: require('~/assets/images/file-icons/png.svg'),
                    name: 'Dashboard-design.png',
                    date: '21-May-18 1:12 PM',
                    size: '3.89 MB',
                    users: [require('~/assets/images/users/avatar-5.jpg')]
                },
                {
                    icon: require('~/assets/images/file-icons/psd.svg'),
                    name: 'Graphic-logo-main.psd',
                    date: '23-May-18 11:34 AM',
                    size: '125 MB',
                    users: [require('~/assets/images/users/avatar-1.jpg'), require('~/assets/images/users/avatar-2.jpg'), require('~/assets/images/users/avatar-3.jpg')]
                },
                {
                    icon: require('~/assets/images/file-icons/avi.svg'),
                    name: 'Audio-video-file.avi',
                    date: '18-Feb-18 4:29 PM',
                    size: '12.3 MB',
                    users: [require('~/assets/images/users/avatar-7.jpg'), require('~/assets/images/users/avatar-8.jpg')]
                },
                {
                    icon: require('~/assets/images/file-icons/pdf.svg'),
                    name: 'Holiday-trip-expenses.pdf',
                    date: '10-Apr-18 1:12 PM',
                    size: '256 KB',
                    users: [require('~/assets/images/users/avatar-6.jpg')]
                },
                {
                    icon: require('~/assets/images/file-icons/txt.svg'),
                    name: 'File-changes-notes.txt',
                    date: '17-Jan-18 2:55 PM',
                    size: '57.3 MB',
                    users: [require('~/assets/images/users/avatar-9.jpg'), require('~/assets/images/users/avatar-10.jpg')]
                },
                {
                    icon: require('~/assets/images/file-icons/eps.svg'),
                    name: 'Eps-file-formate.eps',
                    date: '21-Jun-18 1:12 PM',
                    size: '429 MB',
                    users: [require('~/assets/images/users/avatar-1.jpg'), require('~/assets/images/users/avatar-2.jpg')]
                },
                {
                    icon: require('~/assets/images/file-icons/dll.svg'),
                    name: 'Software-activation.dll',
                    date: '23-May-18 11:34 AM',
                    size: '58 KB',
                    users: [require('~/assets/images/users/avatar-3.jpg')]
                },
                {
                    icon: require('~/assets/images/file-icons/sql.svg'),
                    name: 'Database-db.sql',
                    date: '18-July-18 4:29 PM',
                    size: '89.3 MB',
                    users: [require('~/assets/images/users/avatar-9.jpg'), require('~/assets/images/users/avatar-10.jpg')]
                },
                {
                    icon: require('~/assets/images/file-icons/zip.svg'),
                    name: 'Minton-latest.zip',
                    date: '10-Aug-18 1:12 PM',
                    size: '248 MB',
                    users: [require('~/assets/images/users/avatar-4.jpg')]
                },
            ]
        }
    },
    methods: {
        saveFile(event) {
            for (let i = 0; i < event.target.files.length; i++) {
                const name = event.target.files[i].name
                const size = Math.round(event.target.files[i].size / 1024) + ' KB'
                const date = event.target.files[i].lastModifiedDate

                this.fileManagerData.push({
                    name,
                    date,
                    size,
                    users: [require('~/assets/images/users/avatar-1.jpg')],
                })
            }
        },
    },
    middleware: 'auth'
}
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="fileupload btn btn-success waves-effect waves-light mb-3">
                        <span>
                            <i class="mdi mdi-cloud-upload mr-1"></i> Upload Files
                        </span>
                        <form>
                            <input type="file" class="upload" @change="saveFile($event)" />
                        </form>
                    </div>
                    <!-- Table -->
                    <div class="table-responsive">
                        <table class="table table-centered mb-0">
                            <thead class="font-13 bg-light text-muted">
                                <tr>
                                    <th class="font-weight-medium">File Name</th>
                                    <th class="font-weight-medium">Date Modified</th>
                                    <th class="font-weight-medium">Size</th>
                                    <th class="font-weight-medium">Contributors</th>
                                    <th class="font-weight-medium text-center" style="width: 125px;">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="tableData in fileManagerData" :key="tableData.name">
                                    <td>
                                        <img v-if="tableData.icon" :src="`${ tableData.icon }`" height="30" alt="icon" class="mr-2" />
                                        <a href="javascript:void(0);" class="text-dark">{{tableData.name}}</a>
                                    </td>
                                    <td class="text-muted font-13">{{tableData.date}}</td>
                                    <td>{{tableData.size}}</td>
                                    <td>
                                        <img :src="`${ tableData.users[0] }`" alt="task-user" class="avatar-sm img-thumbnail rounded-circle" />
                                        <img v-if="tableData.users[1]" :src="`${ tableData.users[1] }`" alt="task-user" class="avatar-sm img-thumbnail rounded-circle" />
                                        <img v-if="tableData.users[2]" :src="`${ tableData.users[2] }`" alt="task-user" class="avatar-sm img-thumbnail rounded-circle" />
                                    </td>
                                    <td>
                                        <ul class="list-inline table-action m-0">
                                            <li class="list-inline-item">
                                                <a href="javascript:void(0);" class="action-icon px-1"> <i class="mdi mdi-pencil"></i></a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="javascript:void(0);" class="action-icon px-1"> <i class="mdi mdi-delete"></i></a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- End table -->
                </div>
            </div>
        </div>
    </div>
</div>
</template>
