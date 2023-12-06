export default {
	navigateBasedOnPersona: (selectedOption) => {
		switch (selectedOption) {
			case 'Customer':
				navigateTo('Screen 4A', 'SAME_WINDOW');
				break;
			case 'Business Owner':
				navigateTo('Screen 4B', 'SAME_WINDOW');
				break;
			default:
				break;
		}
	}
}