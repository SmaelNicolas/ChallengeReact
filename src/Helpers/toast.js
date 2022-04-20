import Swal from "sweetalert2";

export const Toast = Swal.mixin({
	toast: true,
	position: "top-right",
	iconColor: "white",
	customClass: {
		popup: "colored-toast",
	},
	showConfirmButton: false,
	timer: 1500,
	timerProgressBar: true,
});

export const ToastWarning = Swal.mixin({
	toast: true,
	position: "top-right",
	iconColor: "white",
	customClass: {
		popup: "colored-toast",
	},
	showConfirmButton: false,
	timer: 3500,
	timerProgressBar: true,
});

export const ToastLogOut = Swal.mixin({
	toast: true,
	position: "top-rigth",
	iconColor: "white",
	customClass: {
		popup: "colored-toast",
	},
	showConfirmButton: false,
	timer: 1500,
	timerProgressBar: true,
});
