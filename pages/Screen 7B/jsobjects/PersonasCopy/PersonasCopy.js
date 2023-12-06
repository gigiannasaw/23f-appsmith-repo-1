export default {
	navigateBasedOnPersona: (selectedOption) => {
		switch (selectedOption) {
			case 'Customer':
				navigateTo('Screen 6A', 'SAME_WINDOW');
				break;
			case 'Business Owner':
				navigateTo('Screen 6B', 'SAME_WINDOW');
				break;
			default:
				break;
		}
	}
}