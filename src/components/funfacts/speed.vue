<template>
	<div>
		Speed fun fact<br>

		<h2>At the top speed : <span v-html="this.helper.formateNumberAsTime(timeAtTop).formatted"></span></h2>
		<h2>At average speed : <span v-html="this.helper.formateNumberAsTime(timeAtAverage).formatted"></span></h2>
	
	</div>
</template>

<script>
	import helpers from '../../helpers/helpers.js';

	export default {
		name: 'speed',
		props: ['distance', 'facts'],
		data () {
			return{
				timeAtAverage: 0,
				timeAtTop: 0
			}
		},
		created() {
			this.calculateData();
			this.helper = helpers;
		},		
		methods: {
			calculateData() {
				/**
				 * top speed 80.5 KPH
				 * metres per second = 80.5 / 3.6 = 22.36111111111111
				 */
				let averageTopSpeedMetrePS = this.facts.speed / 3.6;
				this.timeAtTop = this.distance / averageTopSpeedMetrePS;

				let averageSpeedMetrePS = this.facts.length / this.facts.duration;
				this.timeAtAverage = this.distance / averageSpeedMetrePS;
			}
		}
	}
</script>