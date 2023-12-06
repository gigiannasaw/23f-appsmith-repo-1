export default {
	navigateBasedOnDropdown: (selectedOption) => {
		// Perform navigation based on the selected option
		switch (selectedOption) {
			case 'Lowest Prices':
				navigateTo('Screen 2A', 'SAME_WINDOW');
				break;
			case 'Fastest Service':
				navigateTo('Screen 3A', 'SAME_WINDOW');
				break;
			case 'Has wifi':
				navigateTo('Screen 4A', 'SAME_WINDOW');
				break;
			case 'Has outlets':
				navigateTo('Screen 5A', 'SAME_WINDOW');
				break;
			case 'Promotions':
				navigateTo('Screen 6A', 'SAME_WINDOW');
				break;
			default:
				break;
		}
	}
}