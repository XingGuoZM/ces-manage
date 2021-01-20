<!-- 搜索表单 -->
<template>
    <el-form ref='editForm' :size="size" :inline="inline" :label-width="labelWidth" :model="editData" :rules="editRules">
        <el-form-item v-for='item in editCfg' 
        :label="item.label" 
        :prop='item.prop' 
        :key="item.label">
            <!-- 输入框 -->
            <el-input v-if="item.type==='input'" v-model="editData[item.prop]" 
                @change="item.change && item.change(editData[item.prop])"
                :disabled="item.disabled && item.disabled(editData)"
                :style="{width:item.width}"></el-input>
            <!-- 文本域 -->
            <el-input v-if="item.type==='textarea'" type="textarea" 
                :disabled="item.disabled && item.disabled(editData)"
                @change="item.change && item.change(editData[item.prop])"
                 v-model="editData[item.prop]"  :style="{width:item.width}"></el-input>
            <!-- 下拉框 -->
            <el-select v-if="item.type==='select'" v-model="editData[item.prop]"  
                @change="item.change && item.change(editData[item.prop])"
                :disabled="item.disabled && item.disabled(editData)">
                <el-option v-for="op in item.options" :label="op.label" :value="op.value" :key="op.value"></el-option>
            </el-select>
            <!-- 单选 -->
            <el-radio-group v-if="item.type==='radio'" v-model="editData[item.prop]"
                @change="item.change && item.change(editData[item.prop])"
                :disabled="item.disabled && item.disabled(editData)">
                <el-radio v-for="ra in item.radios" :label="ra.value" :key="ra.value">{{ra.label}}</el-radio>
            </el-radio-group>
            <!-- 单选按钮 -->
            <el-radio-group v-if="item.type==='radioButton'" v-model="editData[item.prop]" 
                    @change="item.change && item.change(editData[item.prop])"
                    :disabled="item.disabled && item.disabled(editData)">
                <el-radio-button v-for="ra in item.radios" :label="ra.value" :key="ra.value">{{ra.label}}</el-radio-button>
            </el-radio-group>
            <!-- 复选框 -->
            <el-checkbox-group v-if="item.type==='checkbox'" v-model="editData[item.prop]" 
                @change="item.change && item.change(editData[item.prop])"
                :disabled="item.disabled && item.disabled(editData)">
                <el-checkbox v-for="ch in item.checkboxs" :label="ch.value" :key='ch.value'>{{ch.label}}</el-checkbox>
            </el-checkbox-group>
            <!-- 日期 -->
            <el-date-picker v-if="item.type==='date'" v-model="editData[item.prop]" 
                @change="item.change && item.change(editData[item.prop])"
                :disabled="item.disabled && item.disabled(editData)"></el-date-picker>
            <!-- 时间 -->
            <el-time-select v-if="item.type==='time'" v-model="editData[item.prop]" type=''
                @change="item.change && item.change(editData[item.prop])"
                :disabled="item.disabled && item.disabled(editData)"></el-time-select>
            <!-- 日期时间 -->
            <el-date-picker v-if="item.type==='dateTime'" type='datetime' v-model="editData[item.prop]" 
                @change="item.change && item.change(editData[item.prop])"
                :disabled="item.disable && item.disable(editData[item.prop])"></el-date-picker>
            <!-- 滑块 -->
            <!-- <el-slider v-if="item.type==='Slider'" v-model="editData[item.prop]"></el-slider> -->
            <!-- 开关 -->
            <el-switch v-if="item.type==='switch'" v-model="editData[item.prop]" 
                @change="item.change && item.change(editData[item.prop])"
                :disabled="item.disabled && item.disabled(editData)"></el-switch>
            <!-- 上传 -->
            <el-upload v-if="item.type==='upload'" 
                class="upload-demo"
                ref="upload"
                :action="item.action"
                :on-success="(response, file, fileList)=>item.success(that,response, file, fileList)"
                :auto-upload="item.autoUpload">
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <!-- <el-button style="margin-left: 10px;" size="small" type="success">上传到服务器</el-button> -->
                <div slot="tip" class="el-upload__tip">只能上传xlsx文件，且不超过500kb</div>
            </el-upload>
            <!-- 表格 -->
            <el-table v-if="item.type==='table'" border index :data="editData.table" style="width: 100%">
                <el-table-column type="index" label="#" align="center" width="50"></el-table-column>
                <el-table-column v-for='col in item.cols'
                    width='60px'
                    :key='col.prop' 
                    :prop='col.prop'
                    :label="col.label">
                </el-table-column>
            </el-table>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    props:{
        that: { type: Object, default: this },
        labelWidth:{
            type:String,
            default:'100px'
        },
        inline:{
            type:Boolean,
            default:true
        },
        size:{
            type:String,
            default:'mini'
        },
        editCfg:{
            type:Array,
            default:()=>[]
        },
        editData:{
            type:Object,
            default:()=>{}
        },
        editRules:{
            type:Object,
            default:null
        }
    },
    data () {
        return {
        };
    },
    methods:{
        // getThat(){
        //     this.$emit('that',this)
        // }
    }

}

</script>
<style>

</style>