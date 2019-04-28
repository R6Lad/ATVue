<template>
	<div class="ride" :style="{ backgroundImage: `url('${item.Image}')` }" @mouseenter="mouseEnter">
		
		<video class="ride__video" loop preload="none" muted>
			<source :src="item.video" type="video/mp4">
		</video>

		<div class="ride__content">
			

			{{item.Title}}
			<div>
				{{item.Summary}}
				<button v-on:click="mySelectEvent">Continue</button>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'RideSummary',
		props: ['item'],
		
		methods: {
			mySelectEvent () {
				this.$emit("rideSelected", this.item.id);
			},
			mouseEnter () {
				console.log('mouse over');
			},
		}
	}
</script>