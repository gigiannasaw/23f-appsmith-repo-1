export default {
	navigateBasedOnPersona: (selectedOption) => {
		switch (selectedOption) {
			case 'Customer':
				navigateTo('Screen 2A', 'SAME_WINDOW');
				break;
			case 'Business Owner':
				navigateTo('Screen 2B', 'SAME_WINDOW');
				break;
			default:
				break;
		}
	}
}