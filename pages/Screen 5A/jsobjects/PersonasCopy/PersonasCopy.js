export default {
	navigateBasedOnPersona: (selectedOption) => {
		switch (selectedOption) {
			case 'Customer':
				navigateTo('Screen 5A', 'SAME_WINDOW');
				break;
			case 'Business Owner':
				navigateTo('Screen 5B', 'SAME_WINDOW');
				break;
			default:
				break;
		}
	}
}