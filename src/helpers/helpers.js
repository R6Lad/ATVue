export default class helpers {

	static distance(lat1, lon1, lat2, lon2, unit) {
		if ((lat1 == lat2) && (lon1 == lon2)) {
			return 0;
		}
		else {
			var radlat1 = Math.PI * lat1/180;
			var radlat2 = Math.PI * lat2/180;
			var theta = lon1-lon2;
			var radtheta = Math.PI * theta/180;
			var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
			if (dist > 1) {
				dist = 1;
			}
			dist = Math.acos(dist);
			dist = dist * 180/Math.PI;
			dist = dist * 60 * 1.1515;
			if (unit=="K") { dist = dist * 1.609344 }
			if (unit=="M") { dist = dist * 1.609344 * 1000}
			if (unit=="N") { dist = dist * 0.8684 }
			return dist;
		}
	}

	static formateNumberAsTime (amount) {

		const hours   = Math.floor(amount / 3600);
		const minutes = Math.floor((amount - (hours * 3600)) / 60);
		const seconds = amount - (hours * 3600) - (minutes * 60);

		let formatted = '';
		if(hours > 0) {
			formatted = `<span>${hours}Hours</span>`
		}

		if(minutes > 0) {
			formatted += `<span>${minutes}Minutes</span>`
		}

		if(seconds > 0) {
			formatted += `<span>${seconds}Seconds</span>`
		}

		let retVal = {
			'hours' : hours,
			'minutes' : minutes,
			'seconds' : seconds,
			'formatted' : formatted
		};
		
		return retVal
	}

}