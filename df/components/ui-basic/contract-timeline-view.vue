<script>
export default {
    name: 'ui-contract-timeline-view',
    props : {
        timelineLogs:{type: Array},
    },
    data() {
        return{
            setAlignment:0
        }
    },
    methods: {
        onSetAlignment(setIndex,setCount){
            let res=0;
            
            if(this.setAlignment ==setIndex){
                res =1;
            }else{
                res =0;
            }
            // if(setCount ==0){this.setAlignment=setIndex;}
            return res;
        },
    }
}
</script>

<template>
    
    <div class="col-12">
        <div class="timeline" dir="ltr">
            <article class="timeline-item">
                <div>
                    <h2 class="m-0 d-none">&nbsp;</h2>
                    <div class="time-show mt-3">
                        <a href="javascript: void(0);" class="btn btn-primary width-lg">Today</a>
                    </div>
                </div>
            </article>
            <article v-for="(data) in timelineLogs" :key="data.id" :class="{ 'timeline-item-left': `${onSetAlignment(data.id,0)}` == 0 }" class="timeline-item">
                
                <div class="timeline-desk">
                    <div  class="timeline-box item-timelinebox-bg">
                        <span class="item-timeline-arrow-bg" :class="{ 'arrow-alt': `${onSetAlignment(data.id,1)}` == 1,'arrow': `${onSetAlignment(data.id,1)}` == 0,}"></span>
                        <span class="timeline-icon">
                            <i class="mdi mdi-adjust"></i>
                        </span>
                        <h4 class="mt-0 font-16">{{_app_format_date_time_duration(data.date_created)}}</h4>
                        <p class="text-muted">
                            <small>{{_app_format_time_AP(data.date_created)}}</small>
                        </p>
                        <p class="mb-0">{{data.log_name}}</p>
                    </div>
                </div>
            </article>
        </div>
    </div>
    
</template>
