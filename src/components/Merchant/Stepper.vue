<template>
    <div class="stepper-container">
        <span class="substract step-btn" v-show="value>0" @click.stop="substractClick"></span>
        <span class="text" v-show="value>0">{{value}}</span>
        <span class="add step-btn" @click.stop="addClick"></span>
    </div>
</template>

<script>
    export default {
        name: "Stepper",
        props: {
          value: {
              type: Number,
              default:0
          }
        },
        model: {
            prop: "value",
            event: "value-changed"
        },
        data(){
            return {
                // value: 0
            }
        },
        methods: {
            substractClick(){
                // this.value -= 1;
                this.$emit("value-changed", this.value-1)
            },
            addClick(){
                // this.value += 1;
                this.$emit("value-changed", this.value+1)
            }
        }
    }
</script>

<style scoped lang="scss">
    .stepper-container {
        display: flex;
        align-items: center;
        .substract {
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAAM1BMVEX////Z296wsLD6+vvo6evi5Obe3+Lr7O709fb5+fr3+Pjb3eDw8fLu7/Hl5+nk5ui5ubmS1nTyAAABG0lEQVRIx52WWXLEIAxEeUGSGeNl7n/aME6lUmQWm+5f+5l2A5LSC+XFPCrUcFtyuqDbFHSK6XaCzE7TvpZ8LFnWnSafPyB5g2oldSpWYXvrcgKmkQdNDpbfWDDwVwEE8cH6HMRTIAX8Y7rZofxbByydyKBfKx7MORV9Bn4CPL82EfkKlOMv+QxzuqQZfr++YemijK3Dz9Sb8mb0sib8Z4tqGlDldrA2AtnhKygjUCGOX0tDesS2sI9BO0vzuI5BK5acMgYVPAV5DMpEy71P9P71pHu/J9REDzXmBdVDSJBkTwpCilzaXOkYSQdWuRrSJZSuu1JYpBKmFEupLCsNQGk1SlOT2qfSqJWRQBg+lDFHG6j00U0fEqVx9BvALAkNabHL3QAAAABJRU5ErkJggg==");
        }

        .add {
            background-image: url("http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/318c525df8eba9c557594305c44b2ddf.png");
        }

        .step-btn{
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 50%;
            display: inline-block;
        }
    }
</style>