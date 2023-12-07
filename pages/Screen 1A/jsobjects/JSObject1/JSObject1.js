export default {
	handleRowClick: (rowData) => {
		navigateTo("Screen 7A", {tableItemId: rowData.cafe_id});
	}
}