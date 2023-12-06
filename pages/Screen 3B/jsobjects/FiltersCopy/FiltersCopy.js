export default {
	navigateBasedOnDropdown: (selectedOption) => {
		// Perform navigation based on the selected option
		switch (selectedOption) {
			case 'Lowest Prices':
				navigateTo('Screen 2B', 'SAME_WINDOW');
				break;
			case 'Fastest Service':
				navigateTo('Screen 3B', 'SAME_WINDOW');
				break;
			case 'Has wifi':
				navigateTo('Screen 4B', 'SAME_WINDOW');
				break;
			case 'Has outlets':
				navigateTo('Screen 5B', 'SAME_WINDOW');
				break;
			case 'Promotions':
				navigateTo('Screen 6B', 'SAME_WINDOW');
				break;
			default:
				break;
		}
	}
}