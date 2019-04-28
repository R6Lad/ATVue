<template>
	<div>

		<h1>Main title</h1>
		
		<div class="loading" v-if="loading">
			Loading...
		</div>
		
		<div v-if="!loading && currentPage==0">
			<div class="rides">
				<RideSummary 
					v-for="item in data.rides" 
					v-bind:key="item.id"
					v-bind:item="item"
					v-on:rideSelected="rideSelect"
					>
				</RideSummary>
			</div>
		</div>
		
		<div v-if="!loading && currentPage==1">
			<h2>Page 1</h2>
			<LocationSelector
				v-on:locationSelected="locationSelect"
			></LocationSelector>
			
		</div>

		<div v-if="!loading && currentPage==2">
			<h2>Page 2</h2>

			<RideFacts
				v-bind:ride="selectedRide"
				v-bind:location="userLocation"
			></RideFacts>
			
		</div>
	
			

	</div>
</template>


<script>
	import RideSummary from './components/RideSummary.vue'
	import LocationSelector from './components/LocationSelector.vue'
	import RideFacts from './components/RideFacts.vue'

	import log from 'util'
	import { setTimeout } from 'timers';

	import helpers from './helpers/helpers.js';
	import './styles/funfacts.scss'

	export default {
		name: 'RideFunFacts',

		components: {
			RideSummary,
			LocationSelector,
			RideFacts
		},

		data () {
			return{
				currentPage: 0,
				loading: true,

				data: null,
				selectedRideId: null,
				selectedRide: null,
				userLocation: null
			}
		},

		created () {
			this.fetchData();
		},

		methods: {
			fetchData() {
				fetch('./api/data.json')
					.then((resp) => {
						resp.json()
							.then((data) => {
								this.data = data;
								this.loading = false;
							})
							.catch((err) => {
								log(`Error : ${err}`)
							})
					})
					.catch((err) => {
						log(`Error : ${err}`)
					})
			},

			rideSelect(id) {
				this.selectedRideId = id;
				this.selectedRide = this.data.rides.find(item => item.id === id);
				this.moveNextPage();
			},
			
			locationSelect(location) {
				this.userLocation = location;	
				this.userLocation.distance = helpers.distance(
					this.userLocation.lat,
					this.userLocation.lng,
					this.data.location.lat,
					this.data.location.lng,
					'M'
				)
				this.moveNextPage();			
			},

			moveNextPage () {
				this.loading = true;
				setTimeout(() => {
					this.loading = false;
					this.currentPage += 1;
				}, 500)
			}

		}

		
	}
</script>

<style>


</style>