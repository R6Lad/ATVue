<template>
	<div>
		inversions<br>
		<h2>Total inversions : {{totalInversions}}</h2>
		
	
	</div>
</template>

<script>
	
	export default {
		name: 'inversions',
		props: ['distance', 'facts'],
		data () {
			return{
				totalInversions: 0
			}
		},
		created() {
			this.calculateData();
		},		
		methods: {
			calculateData() {
				let inversionPM = this.facts.inversions / this.facts.length;
				this.totalInversions = this.distance * inversionPM;
			}
		}
	}
</script>