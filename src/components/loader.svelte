<script>
	export let size = '40px';
	export let background = '#ff3e00';
	export let duration = '2.0s';
	$: bounceStyle = [
		`background-color: ${background}`,
		`animation-duration: ${duration}`
	].join(';');
	$: styles = [`width: ${size}`, `height: ${size}`].join(';');
</script>

<style>
	.spinner {
		position: relative;
		display: inline-block;
	}
	.double-bounce1,
	.double-bounce2 {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		opacity: 0.6;
		position: absolute;
		top: 0;
		left: 0;
		animation: double-bounce 2s ease-in-out infinite;
	}
	.double-bounce2 {
		animation-delay: -1s;
	}
	* {
		line-height: 0;
		box-sizing: border-box;
	}
	@keyframes double-bounce {
		0%,
		100% {
			transform: scale(0);
		}
		50% {
			transform: scale(1);
		}
	}
</style>

<div style={styles} class="spinner spinner--double-bounce">
	<div class="double-bounce1" style={bounceStyle} />
	<div class="double-bounce2" style={bounceStyle} />
</div>
