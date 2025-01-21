<script>
/**
 * Email-toolbar component
 */
export default {}
</script>

<template>
<div>
    <b-button-group class="mr-1">
        <b-button size="sm" variant="light">
            <i class="mdi mdi-archive font-18"></i>
        </b-button>
        <b-button size="sm" variant="light">
            <i class="mdi mdi-alert-octagon font-18"></i>
        </b-button>
        <b-button size="sm" variant="light">
            <i class="mdi mdi-delete-variant font-18"></i>
        </b-button>
    </b-button-group>

    <b-dropdown class="btn-group mr-1" size="sm" variant="light">
        <template slot="button-content">
            <i class="mdi mdi-folder font-18"></i>
            <i class="mdi mdi-chevron-down"></i>
        </template>

        <b-dropdown-item>Updates</b-dropdown-item>
        <b-dropdown-item>Social</b-dropdown-item>
        <b-dropdown-item>Team Manage</b-dropdown-item>
    </b-dropdown>

    <b-dropdown class="btn-group mr-1" size="sm" variant="light">
        <template slot="button-content">
            <i class="mdi mdi-label font-18"></i>
            <i class="mdi mdi-chevron-down"></i>
        </template>
        <b-dropdown-item>Updates</b-dropdown-item>
        <b-dropdown-item>Social</b-dropdown-item>
        <b-dropdown-item>Team Manage</b-dropdown-item>
    </b-dropdown>

    <b-dropdown class="btn-group mr-1" size="sm" variant="light">
        <template slot="button-content">
            <i class="mdi mdi-dots-horizontal font-18"></i> More
            <i class="mdi mdi-chevron-down"></i>
        </template>
        <b-dropdown-item>Mark as Unread</b-dropdown-item>
        <b-dropdown-item>Add to Tasks</b-dropdown-item>
        <b-dropdown-item>Add Star</b-dropdown-item>
        <b-dropdown-item>Mute</b-dropdown-item>
    </b-dropdown>
</div>
</template>
