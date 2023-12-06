export default {
	navigateBasedOnPersona: (selectedOption) => {
		switch (selectedOption) {
			case 'Customer':
				navigateTo('Screen 1A', 'SAME_WINDOW');
				break;
			case 'Business Owner':
				navigateTo('Screen 1B', 'SAME_WINDOW');
				break;
			default:
				break;
		}
	}
}