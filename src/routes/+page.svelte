<script lang="ts">
	import '../app.css';
	import type { LatLngExpression } from 'leaflet';
	import Leaflet from '$lib/leaflet.svelte';
	import Marker from '$lib/marker.svelte';
	import Popup from '$lib/popup.svelte';

	interface Location {
		coordinates: LatLngExpression;
		iconPath: string;
		name: string;
		title?: string;
	}
   
	const initialView: LatLngExpression = [-1.34568,116.74255];
	const markerLocations: Array<Location> = [
		{
			coordinates: [-1.3345999401290527,116.75245912009495,],
			iconPath: "/fishingboat.png",
			name: "Dermaga Sesumpu",
			title: "Dermaga perahu nelayan Sesumpu"
		},
		{
			coordinates: [-1.335495333044932, 116.75254234682592],
			iconPath: "/mosquee.png",
			name: "Masjid Nurul Yaqin",
			title: "Masjid besar di Sesumpu"
		},
		{
			coordinates: [-1.3465547697445004, 116.74472137812859],
			iconPath: "/hospital-building.png",
			name: "PUSBAN Sesumpu",
			title: "Puskesmas Pembantu Sesumpu"
		},
		{
			coordinates: [-1.346111619019851, 116.74465421553737],
			iconPath: "/school-2.png",
			name: "SDN 008 Sesumpu",
			title: "Sekolah Dasar Negeri 008 Sesumpu"
		},
		{
			coordinates: [-1.3469122993048899,116.74239373880744],
			iconPath: "/office-building.png",
			name: "Kantor Kelurahan Sesumpu",
			title: "Kantor Kelurahan Sesumpu"
		},
		{
			coordinates: [-1.346278019412253,116.74368452679357],
			iconPath: "/fishing.png",
			name: "Pemancingan Sesumpu",
			title: "Wisata Pemancingan Kelurahan Sesumpu"
		}
	];
</script>

<div class="w-full h-screen relative">
	<Leaflet 
		view={initialView} 
		zoom={15}
	>
		{#each markerLocations as location}
			<Marker latLng={location.coordinates} width={40} height={40}>
				<img src={location.iconPath} alt={location.name} width="40" height="40" />
				<Popup>
					<div class="font-bold">{location.name}</div>
					<div class="text-sm">{location.title}</div>
				</Popup>
			</Marker>
		{/each}
	</Leaflet>
</div>