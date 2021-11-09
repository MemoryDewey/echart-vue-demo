<template>
  <div class="demo">
    <div class="info item">
      <div class="city">{{ this.city }}</div>
      <div class="avg">Average Price: {{ this.avgPrice }}</div>
    </div>
    <bar-chart class="item" :x-data="roomXData" :y-data="roomYData" title="Room Type" />
    <bar-chart class="item" :x-data="tenancyXData" :y-data="tenancyYData" title="Tenancy Term" />
  </div>
</template>

<script>
// @ is an alias to /src

import BarChart from "@/components/BarChart";

export default {
  name: 'Home',
  components: { BarChart },
  data() {
    return {
      roomXData: [],
      roomYData: [],
      tenancyXData: [],
      tenancyYData: [],
      city: '',
      avgPrice: 0,
    }
  },
  methods: {
    // mock的数据
    mockRes() {
      return {
        "city": "Toronto",
        "room_type_x": [
          "Entire home/apt",
          "Private room"
        ],
        "room_type_y": [
          9764,
          4918
        ],
        "tenancy_term_x": [
          "Long Rent",
          "Short Rent"
        ],
        "tenancy_term_y": [
          11057,
          3901
        ],
        "Average_price": 159.80002674333087,
        "msg": "success",
        "error_num": 0
      }
    }
  },
  mounted() {
    const res = this.mockRes()
    this.city = res.city
    this.avgPrice = res.Average_price.toFixed(2)
    this.roomXData = res.room_type_x
    this.roomYData = res.room_type_y
    this.tenancyXData = res.tenancy_term_x
    this.tenancyYData = res.tenancy_term_y
  }
}
</script>

<style scoped>
.demo {
  display: flex;
  border: 1px solid #2c3e50;
}

.item {
  flex: 1;
}

.item:not(:last-child) {
  border-right: 1px solid #2c3e50;
}

.info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.city, .avg {
  font-size: 20px;
}
</style>
