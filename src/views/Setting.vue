<template>
  <el-card>
    <template #header>
      <div>
        <el-button class="button" text>个性化推荐</el-button>
        <el-button class="button" text>优秀案例</el-button>
        <el-button class="button" text>最近上新</el-button>
      </div>
    </template>
    <el-form :model="form" label-width="120px" class="form">
      <el-form-item label="个人名称">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="关键词">
        <el-input v-model="form.keyword"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="底部版">
        <el-input v-model="form.bottom"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <img
        style="width: 100px h;height: 100px;"
          src="https://img1.baidu.com/it/u=1136384194,1585439386&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500"
          alt=""
        />
      </el-form-item>
      <el-form-item label="备注">
        <el-input
          type="textarea"
          :row="100"
          v-model="form.code"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleRouter('/recommendation')">保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const handleRouter = (path) => {
  router.push(`${path}`);
};
const form = ref({
  userName: "王小明",
  keyword: "地图定制",
  desc: "",
  bottom: "",
  code: "5212131313131313",
});
</script>

<style lang="scss" scoped>

.form{
  /* height: 700px; */
  display: flex;
  flex-direction: column;
  gap: 25px
}
</style>
