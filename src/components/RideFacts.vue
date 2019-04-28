<template>
	<div>
		
		<h3>All the fun facts here</h3>
		<speed
			v-bind:distance="location.distance"
			v-bind:facts="ride.facts"
		></speed>

		<inversions
			v-bind:distance="location.distance"
			v-bind:facts="ride.facts"
		></inversions>

	</div>
</template>

<script>
	import speed from './funfacts/speed.vue'
	import inversions from './funfacts/inversions.vue'

	export default {
		name: 'FunFacts',
		props: ['ride', 'location'],
		components: {
			speed,
			inversions
		},
		methods: {
			
		}
	}
</script>