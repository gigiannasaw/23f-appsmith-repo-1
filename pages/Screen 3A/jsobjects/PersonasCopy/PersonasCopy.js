export default {
	navigateBasedOnPersona: (selectedOption) => {
		switch (selectedOption) {
			case 'Customer':
				navigateTo('Screen 3A', 'SAME_WINDOW');
				break;
			case 'Business Owner':
				navigateTo('Screen 3B', 'SAME_WINDOW');
				break;
			default:
				break;
		}
	}
}