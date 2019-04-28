<template>
	<div>

		<button v-on:click="getCurrentLocation">My current location</button>
		OR
		<vue-google-autocomplete
				id="map"
				classname="form-control"
				placeholder="Start typing"
				enable-geolocation				
				v-on:placechanged="getAddressData"
			>
		</vue-google-autocomplete>
		
		<p>Alton Towers</p>

		<button v-bind:disabled="!valid" v-on:click="returnData">Continue</button>
	</div>
</template>

<script>
	import VueGoogleAutocomplete from 'vue-google-autocomplete'

	export default {
		name: 'LocationSelector',
		data () {
			return{
				valid: false,
				location: {
					lat: 0,
					lng: 0
				}
			}
		},
		components: {
			VueGoogleAutocomplete
		},
		
		methods: {
			getAddressData (addressData) {
				this.location.lat = addressData.latitude;
				this.location.lng = addressData.longitude;
				this.valid = true;
			},

			getCurrentLocation () {
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition((position) => {
						const crd = position.coords;
						this.location.lat = crd.latitude;
						this.location.lng = crd.longitude;
						this.valid = true;
					},
					(error) => {
						console.log(error)
					})
				}
			},

			returnData() {
				this.$emit("locationSelected", this.location);
			}
		}
	}
</script>