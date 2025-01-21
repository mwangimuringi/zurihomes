<script>
/**
 * Revenue history component
 */
export default {
    data() {
        return {
            revenueData: [{
                    marketplaces: "Themes Market",
                    date: "Oct 15, 2018",
                    tax: "$125.23",
                    payout: "$5848.68",
                    status: "Upcoming"
                },
                {
                    marketplaces: "Freelance",
                    date: "Oct 12, 2018",
                    tax: "$78.03",
                    payout: "$5848.68",
                    status: "Paid"
                },
                {
                    marketplaces: "Share Holding",
                    date: "Oct 10, 2018",
                    tax: "$358.24",
                    payout: "$815.89",
                    status: "Paid"
                },
                {
                    marketplaces: "Envato's Affiliates",
                    date: "Oct 03, 2018",
                    tax: "$18.78",
                    payout: "$248.75",
                    status: "Overdue"
                },
                {
                    marketplaces: "Marketing Revenue",
                    date: "Sep 21, 2018",
                    tax: "$185.36",
                    payout: "$978.21",
                    status: "Upcoming"
                },
                {
                    marketplaces: "Advertise Revenue",
                    date: "Sep 15, 2018",
                    tax: "$29.56",
                    payout: "$358.10",
                    status: "Paid"
                }
            ]
        };
    }
};
</script>

<template>
<div class="card">
    <div class="card-body">
        <b-dropdown class="float-right" variant="black" right toggle-class="arrow-none card-drop">
            <template v-slot:button-content>
                <i class="mdi mdi-dots-horizontal"></i>
            </template>
            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item">Settings</a>
            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item">Download</a>
            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item">Upload</a>
            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item">Action</a>
        </b-dropdown>
        <h4 class="header-title mb-3">Revenue History</h4>
        <div class="table-responsive mb-0">
            <table class="table table-borderless table-hover table-centered m-0">
                <thead class="thead-light">
                    <tr>
                        <th>Marketplaces</th>
                        <th>Date</th>
                        <th>US Tax Hold</th>
                        <th>Payouts</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in revenueData" :key="data.date">
                        <td>
                            <h5 class="m-0 font-weight-normal">{{ data.marketplaces }}</h5>
                        </td>
                        <td>{{ data.date }}</td>
                        <td>{{ data.tax }}</td>
                        <td>{{ data.payout }}</td>
                        <td>
                            <span :class="{
                    'bg-soft-success text-success': `${data.status}` === 'Paid',
                    'bg-soft-warning text-warning':
                      `${data.status}` === 'Upcoming',
                    'bg-soft-danger  text-danger':
                      `${data.status}` === 'Overdue'
                  }" class="badge">{{ data.status }}</span>
                        </td>
                        <td>
                            <a href="javascript: void(0);" class="btn btn-xs btn-secondary">
                                <i class="mdi mdi-pencil"></i>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- end .table-responsive-->
    </div>
</div>
</template>
