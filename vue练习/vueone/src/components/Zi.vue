<template>
    <div>
        <!-- {{msg}}
        <slot name="child"></slot> -->
    </div>
</template>

<script>
    export default {
        data(){
            return {
                msg:"子组件"
            }
        },
        props:["fufn1"],
        methods:{
            getfu(){
                this.fufn1()
            }
        }
    }
</script>

<style  scoped>

</style>