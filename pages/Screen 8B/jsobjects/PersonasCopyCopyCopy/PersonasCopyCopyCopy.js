export default {
	navigateBasedOnPersona: (selectedOption) => {
		switch (selectedOption) {
			case 'Customer':
				navigateTo('Screen 8A', 'SAME_WINDOW');
				break;
			case 'Business Owner':
				navigateTo('Screen 8B', 'SAME_WINDOW');
				break;
			default:
				break;
		}
	}
}