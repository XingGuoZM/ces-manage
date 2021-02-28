<!-- 搜索表单 -->
<template>
<div class="ces-search">
    <el-form :size="size" inline :label-width="labelWidth">
        <el-form-item v-for='item in searchForm' :label="item.label" :key="item.label">
            <!-- 输入框 -->
            <el-input v-if="item.type==='input'" v-model="searchData[item.prop]" :size="size || item.size" :style="{width:item.width}"
                :placeholder='item.placeholder'
                @change="item.change(that,searchData[item.prop])" 
                :disabled="item.disable && item.disable(searchData[item.prop])">
            </el-input>
            <!-- 下拉框 -->
            <el-select v-if="item.type==='select'" v-model="searchData[item.prop]" :size="size || item.size" :style="{width:item.width}"
                :placeholder='item.placeholder'
                @change="item.change(that,searchData[item.prop])" 
                :disabled="item.disable && item.disable(searchData[item.prop])">
                <el-option v-for="op in item.options" :label="op.label" :value="op.value" :key="op.value"></el-option>
            </el-select>
            <!-- 单选 -->
            <el-radio-group v-if="item.type==='radio'" v-model="searchData[item.prop]" :style="{width:item.width}" 
                @change="item.change(that,searchData[item.prop])" :size="size || item.size"
                :disabled="item.disable && item.disable(searchData[item.prop])">
                <el-radio v-for="ra in item.radios" :label="ra.value" :key="ra.value">{{ra.label}}</el-radio>
            </el-radio-group>
            <!-- 单选按钮 -->
            <el-radio-group v-if="item.type==='radioButton'" v-model="searchData[item.prop]"  :style="{width:item.width}"
                @change="item.change && item.change(that,searchData[item.prop])" :size="size || item.size"
                :disabled="item.disable && item.disable(searchData[item.prop])">
                <el-radio-button v-for="ra in item.radios" :label="ra.value" :key="ra.value">{{ra.label}}</el-radio-button>
            </el-radio-group>
            <!-- 复选框 -->
            <el-checkbox-group v-if="item.type==='checkbox'" v-model="searchData[item.prop]"  :style="{width:item.width}" 
                @change="item.change(that,searchData[item.prop])" :size="size || item.size"
                :disabled="item.disable && item.disable(searchData[item.prop])">
                <el-checkbox v-for="ch in item.checkboxs" :label="ch.value" :key="ch.value">{{ch.label}}</el-checkbox>
            </el-checkbox-group>
            <!-- 日期 -->
            <el-date-picker v-if="item.type==='date'" v-model="searchData[item.prop]" :style="{width:item.width}" 
                :placeholder='item.placeholder'
                @change="item.change(that,searchData[item.prop])" :size="size || item.size"
                :disabled="item.disable && item.disable(searchData[item.prop])"></el-date-picker>
            <!-- 时间 -->
            <el-time-select v-if="item.type==='time'" v-model="searchData[item.prop]" type='' :style="{width:item.width}"
                :placeholder='item.placeholder' 
                @change="item.change(that,searchData[item.prop])" :size="size || item.size"
                :disabled="item.disable && item.disable(searchData[item.prop])"></el-time-select>
            <!-- 日期时间 -->
            <el-date-picker v-if="item.type==='dateTime'" type='datetime' :style="{width:item.width}" v-model="searchData[item.prop]"
                :placeholder='item.placeholder' 
                @change="item.change(that,searchData[item.prop])" :size="size || item.size"
                :disabled="item.disable && item.disable(searchData[item.prop])"></el-date-picker>
            <!-- 滑块 -->
            <!-- <el-slider v-if="item.type==='Slider'" v-model="searchData[item.prop]"></el-slider> -->
            <!-- 开关 -->
            <el-switch v-if="item.type==='switch'" v-model="searchData[item.prop]"  :size="size || item.size"
                @change="item.change(that,searchData[item.prop])" :style="{width:item.width}"
                :disabled="item.disable && item.disable(searchData[item.prop])"></el-switch>
        </el-form-item>
    </el-form>
    <el-form inline v-if='isHandle'>
        <el-form-item v-for='item in searchHandle' :key="item.label">
            <el-button :type="item.type || type" :size="item.size || size" @click='item.handle(that)'>{{item.label}}</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script lang='ts'>
export default {
    props:{
        that: { type: Object, default: this },
        isHandle:{
            type:Boolean,
            default:true
        },
        labelWidth:{
            type:String,
            default:'100px'
        },
        type:{
            type:String,
            default:'primary'
        },
        size:{
            type:String,
            default:'mini'
        },
        searchForm:{
            type:Array,
            default:()=>[]
        },
        searchHandle:{
            type:Array,
            default:()=>[]
        },
        searchData:{
            type:Object,
            default:()=>{}
        }
    },
    data () {
        return {
        };
    },

}

</script>
<style>

</style>