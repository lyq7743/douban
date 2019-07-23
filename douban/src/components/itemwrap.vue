<template>
  <div class="itemwrap" @click = "fn()" :class="{click:flag}">
  	<span v-show='!flag'><slot name = "leftImg"></slot></span>
  	<span v-show ='flag' ><slot name = "rightImg"></slot></span>
  	<br />
  	<span>{{title}}</span>
  </div>
</template>

<script>
export default {
	
  data () {
    return {
      
    }
  },
  props:['title','mark','curr'],
  computed:{
  	flag(){
  		if(this.mark == this.curr){
  			return true;
  		}
  			return false;
  	}
  },
  methods:{
  	fn(){
  		console.log(this.mark)
  		this.$emit('change',this.mark);
  		this.$router.push({path:'/'+this.mark});
  	}
  	
  }
  
}
</script>


<style scoped lang="less" scoped>
		.itemwrap{
			flex: 1;
			text-align: center;
			font-size: 12/68rem;
		}
		img{
			
			width: 60/68rem;
		}
		.click{
			color: green;
		}
</style>
