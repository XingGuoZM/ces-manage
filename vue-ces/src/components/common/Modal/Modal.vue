<template>
<transition name="el-fade-in"> 
<div v-if="modalCfg.visible" style="width:100%;height:100%;position:fixed;top:0px;left:0px;z-index:8;">
    <!-- 遮罩 -->
    <div class="ces-mask"></div>
    <div class="ces-modal-wrap">
      <div class="ces-modal" :style="{width:width}">
        <!-- 标题头部 -->
          <section  style="padding:10px;border-bottom: solid 1px #f1f1f1;" v-if="isHeader">
              <div class="ces-modal__header" >
              <div>{{modalCfg.title}}</div>
              <i class="el-icon-close ces-modal-close" @click="modalCfg.close(that)"></i>
              </div>
          </section>
          <!-- body -->
          <section class="ces-modal__body" style="padding:10px;" v-loading="modalLoading">
              <slot></slot>
          </section>
          <!-- 操作底部 -->
          <section style="padding:10px;border-top: solid 1px #f1f1f1;" v-if='isHandle'>
              <div class="ces-modal__footer">
              <span>
                <el-button v-for='item in modalCfg.handles' :key="item.label"
                    :type='item.type' 
                    :icon='item.icon' 
                    :size='item.size'
                    :disabled='item.disabled'
                    @click="item.handle(that)">{{item.label}}</el-button>
              </span>
              </div>
          </section>
      </div>
  </div>
</div>
</transition>
</template>

<script>

export default {
  
    props:{
      that: { type: Object, default: this },
      modalCfg:{
        visible:false,
        title:'',
        handles:[]
      },
      width:{
        type:String,
        default:'50%'
      },
      isHeader:{
        type:Boolean,
        default:true
      },
      modalLoading:{
        type:Boolean,
        default:false
      },
      isHandle:{
        type:Boolean,
        default:true
      }

    },
    computed: {
        
    },
    methods: {
      close(){
        this.$emit('close')
      }
    }
}
</script>