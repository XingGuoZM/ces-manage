<template>
    <div>
        <div v-for="(item,index) in menus" :key="item.id" :index="item.menuUrl">
            <!-- 有子菜单 -->
            <el-submenu :index="item.menuUrl" v-if="item.children">
                <template slot="title" >
                    <i :class="item.menuIcon" style="width:30px;"></i>
                    <span slot="title"  style="margin-left:10px;" >{{ item.menuName }}</span>
                </template>
                <tree-menu :menus="item.children" ></tree-menu>
            </el-submenu>
            <!-- 无子菜单 -->
            <el-menu-item :index="item.menuUrl" v-else >
                <i :class="item.menuIcon" style="width:30px;"></i>
                <span slot="title" style="margin-left:10px;">{{ item.menuName }}</span>
            </el-menu-item>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['menus'],
        name: 'tree-menu',
    }
    
</script>
