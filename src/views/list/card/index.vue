<!--
 * @Author: ecstAsy
 * @Date: 2021-12-09 14:03:24
 * @LastEditTime: 2022-01-04 13:04:05
 * @LastEditors: ecstAsy
-->

<template>
  <a-spin :spinning="loading">
    <a-row
      :gutter="24"
      class="card-lists"
    >
      <template
        v-for="item in dataArry"
        :key="item.id"
      >
        <a-col :span="6">
          <a-card>
            <template #title>
              <a-row>
                <a-col :span="12">
                  {{ item.name }}
                </a-col>
                <a-col
                  align="right"
                  :span="12"
                >
                  <span class="header-extra">{{ item.date }}</span>
                </a-col>
              </a-row>
            </template>
            <div
              class="card-list"
              :style="{ backgroundImage: `url(${ImageMaps[item.bgimg]})` }"
            >
              <div class="list-content">
                {{ item.article }}
              </div>
              <div class="list-action">
                <moko-icon icon="Star" />
                <span>{{ item.star }}</span>
                <moko-icon icon="ChatDotRound" />
                <span>{{ item.like }}</span>
                <moko-icon icon="View" />
                <span>{{ item.view }}</span>
              </div>
              <div class="list-footer">
                ——{{ item.signature }}
              </div>
            </div>
          </a-card>
        </a-col>
      </template>
      <a-col
        :span="24"
        align="center"
        style="margin: 24px 0;"
      >
        <a-pagination
          size="medium"
          background
          layout="prev, pager, next"
          :total="100"
          @change="onCurrentChange"
        />
      </a-col>
    </a-row>
  </a-spin>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { mockLists } from "@/dataSource";
import {
  col1, col2, col3, col4, col5, col6, txtBg,
} from "@/assets";

const dataArry = ref<Array<any>>([]);
const loading = ref<boolean>(false);
const ImageMaps = ref<Array<string>>([
  col1, col2, col3, col4, col5, col6, txtBg,
]);
const load = async () => {
  loading.value = true;
  const data: any = await mockLists({ num: 12 });
  dataArry.value = data.data.list;
  loading.value = false;
};
onMounted(() => load());

const onCurrentChange = () => {
  load();
};
</script>

<style lang="less" scoped>
@import "@/styles/index.less";
.card-lists {
  .ant-col.ant-col-6 {
    padding-right: 4px !important;
    margin-bottom: 16px;
    &:last-of-type {
      padding-right: 12px !important;
    }
  }

  .header-extra {
    font-size: 10px;
    color: #b0b0b0;
  }
  .card-list {
    width: 100%;
    font-size: 13px;
    background-origin: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    .list-content {
      height: 96px;
      line-height: 16px;
      .ellipse(7);
      overflow: hidden;
    }

    .list-action {
      height: 30px;
      margin-top: 16px;
     .flex-row(@type:flex-start);
      span {
       .f-s-c(13px, @font-color-regular);
        margin-right: 8px;
      }
    }

    .list-footer {
      text-align: right;
    }
  }
}
</style>
