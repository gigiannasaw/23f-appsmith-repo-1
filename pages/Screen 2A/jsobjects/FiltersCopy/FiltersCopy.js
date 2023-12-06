export default {
	navigateBasedOnDropdown: (selectedOption) => {
		// Perform navigation based on the selected option
		switch (selectedOption) {
			case 'Lowest Prices':
				navigateTo('Screen2B', 'SAME_WINDOW');
				break;
			case 'Fastest Service':
				navigateTo('Screen3B', 'SAME_WINDOW');
				break;
			case 'Has wifi':
				navigateTo('Screen4B', 'SAME_WINDOW');
				break;
			case 'Has outlets':
				navigateTo('Screen5B', 'SAME_WINDOW');
				break;
			case 'Promotions':
				navigateTo('Screen6B', 'SAME_WINDOW');
				break;
			default:
				break;
		}
	}
}