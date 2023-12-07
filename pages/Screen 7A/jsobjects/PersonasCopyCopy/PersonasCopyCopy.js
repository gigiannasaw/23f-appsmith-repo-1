export default {
	navigateBasedOnPersona: (selectedOption) => {
		switch (selectedOption) {
			case 'Customer':
				navigateTo('Screen 7A', 'SAME_WINDOW');
				break;
			case 'Business Owner':
				navigateTo('Screen 7B', 'SAME_WINDOW');
				break;
			default:
				break;
		}
	}
}