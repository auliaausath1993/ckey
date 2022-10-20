var shop_name = ''; // NAMA TOKO ONLINE
var domain = 'https://ckeystore.com/mobile/'; // DOMAIN URL ADMIN
var admin_url = domain;

var base_url_api = 'http://api.tokomobile.co.id/ongkir/production/api';
var token_api = 'fd8041e6cbfc39da0ced1fa6802ce572';
var domain_api = 'ckeystore.com';

var base_url = domain + '_api_/android_dev/'; // URL API
var base_url_media = admin_url + 'media'; // DIREKTORI PENYIMPANAN IMAGE DI HOSTING
var token = 'fd8041e6cbfc39da0ced1fa6802ce572'; // ISI DENGAN TOKEN

//----------------------//

var loading = '<ion-spinner icon="android"></ion-spinner>';

var page = 1;
var page_pesanan = 1;
var page_pesan = 1;
var message_notif = '';

function toRp(a,b,c,d,e){e=function(f){return f.split('').reverse().join('')};b=e(parseInt(a,10).toString());for(c=0,d='';c<b.length;c++){d+=b[c];if((c+1)%3===0&&c!==(b.length-1)){d+='.';}}return'\t'+e(d)+''}

function check_token() {
	alert('Invalid Token');
	window.location = '#/login';
	return false;
}

function check_status_aplikasi(message) {
	message_notif = message;
	window.location = '#/notifikasi';
	return false;
}

function check_status_member() {
	message_notif = 'Status member anda tidak aktif';
	window.location = '#/notifikasi';
	return false;
}

function check_status_member_not_found() {
	message_notif = 'Member Not Found';
	window.location = '#/notifikasi';
	return false;
}

angular.module('starter', ['ionic', 'ionicLazyLoad', 'ngCordova', 'ionic-autocomplete', 'angular.filter', 'angularMoment', 'monospaced.elastic', 'ngclipboard', 'ionic-toast', 'ionic.native', 'ionicImgCache', 'ngSanitize'])
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
	$ionicConfigProvider.tabs.position('bottom');
	$stateProvider
	.state('startup', {
		url: '/startup',
		templateUrl: 'templates/startup.html',
		controller: 'startupController'
	})
	.state('login', {
		url: '/login',
		templateUrl: 'templates/login.html',
		controller: 'startupController'
	})
	.state('notifikasi', {
		url: '/notifikasi',
		templateUrl: 'templates/notifikasi.html',
		controller: 'notifikasiController'
	})
	.state('eventmenu', {
		url: '/event',
		abstract: true,
		templateUrl: 'templates/menu.html'
	})
	.state('eventmenu.dashboard', {
		url: '/dashboard',
		views: {
			'menuContent': {
				templateUrl: 'templates/dashboard.html'
			},
			'dashboard-tab': {
				templateUrl: 'templates/dashboard.html'
			}
		}
	})
	.state('eventmenu.login_inside', {
		url: '/login_inside',
		views: {
			'menuContent': {
				templateUrl: 'templates/login.html'
			},
			'dashboard-tab': {
				templateUrl: 'templates/login.html'
			}
		}
	})
	.state('eventmenu.login_phone', {
		url: '/login_phone',
		views: {
			'menuContent': {
				templateUrl: 'templates/loginPhone.html'
			},
			'dashboard-tab': {
				templateUrl: 'templates/loginPhone.html'
			}
		}
	})
	.state('eventmenu.register', {
		url: '/register',
		views: {
			'menuContent': {
				templateUrl: 'templates/register.html'
			},
			'dashboard-tab': {
				templateUrl: 'templates/register.html'
			}
		}
	})
	.state('eventmenu.tipeKategori', {
		url: '/tipeKategori/:type',
		views: {
			'menuContent': {
				templateUrl: 'templates/tipeKategori.html'
			},
			'dashboard-tab': {
				templateUrl: 'templates/tipeKategori.html'
			}
		}
	})
	.state('eventmenu.subKategori', {
		url: '/subKategori/:category',
		views: {
			'menuContent': {
				templateUrl: 'templates/subKategori.html'
			},
			'dashboard-tab': {
				templateUrl: 'templates/subKategori.html'
			}
		}
	})
	.state('eventmenu.dashboardCategory', {
		url: '/dashboardCategory/:category',
		views: {
			'menuContent': {
				templateUrl: 'templates/dashboardCategory.html'
			},
			'dashboard-tab': {
				templateUrl: 'templates/dashboardCategory.html'
			}
		}
	})
	.state('eventmenu.dashboardSearch', {
		url: '/dashboardSearch',
		views: {
			'menuContent': {
				templateUrl: 'templates/dashboardSearch.html'
			},
			'dashboard-tab': {
				templateUrl: 'templates/dashboardSearch.html'
			}
		}
	})
	.state('eventmenu.wishlist', {
		url: '/wishlist',
		views: {
			'menuContent': {
				templateUrl: 'templates/wishlist.html'
			},
			'dashboard-tab': {
				templateUrl: 'templates/wishlist.html'
			}
		}
	})
	.state('eventmenu.detailbarang', {
		url: '/detailbarang',
		views: {
			'menuContent': {
				templateUrl: 'templates/detailbarang.html'
			},
			'dashboard-tab': {
				templateUrl: 'templates/detailbarang.html'
			}
		}
	})
	.state('eventmenu.listpesananbarang', {
		url: '/listpesananbarang',
		views: {
			'menuContent': {
				templateUrl: 'templates/listpesananbarang.html'
			},
			'cart-tab': {
				templateUrl: 'templates/listpesananbarang.html'
			}
		}
	})
	.state('eventmenu.dropship1', {
		url: '/dropship1',
		views: {
			'menuContent': {
				templateUrl: 'templates/dropship1.html'
			},
			'cart-tab': {
				templateUrl: 'templates/dropship1.html'
			}
		}
	})
	.state('eventmenu.dropship2', {
		url: '/dropship2',
		views: {
			'menuContent': {
				templateUrl: 'templates/dropship2.html'
			},
			'cart-tab': {
				templateUrl: 'templates/dropship2.html'
			}
		}
	})
	.state('eventmenu.titipToko', {
		url: '/titipToko',
		views: {
			'menuContent': {
				templateUrl: 'templates/titipToko.html'
			},
			'cart-tab': {
				templateUrl: 'templates/titipToko.html'
			}
		}
	})
	.state('eventmenu.datapesanan', {
		url: '/datapesanan',
		views: {
			'menuContent': {
				templateUrl: 'templates/datapesanan.html'
			},
			'cart-tab': {
				templateUrl: 'templates/datapesanan.html'
			}
		}
	})
	.state('eventmenu.listdatapesanan', {
		url: '/listdatapesanan',
		views: {
			'menuContent': {
				templateUrl: 'templates/listdatapesanan.html'
			},
			'pesanan-tab': {
				templateUrl: 'templates/listdatapesanan.html'
			}
		}
	})
	.state('eventmenu.listdatadetailpesanan', {
		url: '/listdatadetailpesanan',
		views: {
			'menuContent': {
				templateUrl: 'templates/listdatadetailpesanan.html'
			},
			'pesanan-tab': {
				templateUrl: 'templates/listdatadetailpesanan.html'
			}
		}
	})
	.state('eventmenu.konfirmasipembayaran', {
		url: '/konfirmasipembayaran',
		views: {
			'menuContent': {
				templateUrl: 'templates/konfirmasipembayaran.html'
			},
			'dashboard-tab': {
				templateUrl: 'templates/konfirmasipembayaran.html'
			}
		}
	})
	.state('eventmenu.kotakmasuk', {
		url: '/kotakmasuk',
		views: {
			'menuContent': {
				templateUrl: 'templates/kotakmasuk.html'
			},
			'dashboard-tab': {
				templateUrl: 'templates/kotakmasuk.html'
			}
		}
	})
	.state('eventmenu.info', {
		url: '/info',
		views: {
			'menuContent': {
				templateUrl: 'templates/info.html'
			},
			'dashboard-tab': {
				templateUrl: 'templates/info.html'
			}
		}
	})
	.state('eventmenu.news', {
		url: '/news',
		views: {
			'menuContent': {
				templateUrl: 'templates/news.html'
			},
			'dashboard-tab': {
				templateUrl: 'templates/news.html'
			}
		}
	})
	.state('eventmenu.newsDetail', {
		url: '/newsDetail',
		views: {
			'menuContent': {
				templateUrl: 'templates/newsDetail.html'
			},
			'dashboard-tab': {
				templateUrl: 'templates/newsDetail.html'
			}
		}
	})
	.state('eventmenu.rekening', {
		url: '/rekening',
		views: {
			'menuContent': {
				templateUrl: 'templates/rekening.html'
			},
			'dashboard-tab': {
				templateUrl: 'templates/rekening.html'
			}
		}
	})
	.state('eventmenu.pengaturan', {
		url: '/pengaturan',
		views: {
			'menuContent': {
				templateUrl: 'templates/pengaturan.html'
			},
			'setting-tab': {
				templateUrl: 'templates/pengaturan.html'
			}
		}
	})
	.state('eventmenu.editprofil', {
		url: '/editprofil',
		views: {
			'menuContent': {
				templateUrl: 'templates/editprofil.html'
			},
			'dashboard-tab': {
				templateUrl: 'templates/editprofil.html'
			}
		}
	})
	.state('eventmenu.update', {
		url: '/update',
		views: {
			'menuContent': {
				templateUrl: 'templates/update.html'
			},
			'dashboard-tab': {
				templateUrl: 'templates/update.html'
			}
		}
	})
	.state('eventmenu.pesanmasukdetail', {
		url: '/pesanmasukdetail',
		views: {
			'menuContent': {
				templateUrl: 'templates/pesanmasukdetail.html'
			},
			'dashboard-tab': {
				templateUrl: 'templates/pesanmasukdetail.html'
			}
		}
	})
	.state('eventmenu.cekresidetail', {
		url: '/cekresidetail',
		views: {
			'menuContent': {
				templateUrl: 'templates/cekresidetail.html'
			},
			'dashboard-tab': {
				templateUrl: 'templates/cekresidetail.html'
			}
		}
	})
	.state('eventmenu.faq', {
		url: '/faq',
		views: {
			'menuContent': {
				templateUrl: 'templates/faq.html'
			},
			'dashboard-tab': {
				templateUrl: 'templates/faq.html'
			}
		}
	})
	.state('eventmenu.ticketing', {
		url: '/ticketing',
		views: {
			'menuContent': {
				templateUrl: 'templates/ticketing.html'
			}
		}
	})
	.state('eventmenu.cekongkir', {
		url: '/cekongkir',
		views: {
			'menuContent': {
				templateUrl: 'templates/cekongkir.html'
			},
			'dashboard-tab': {
				templateUrl: 'templates/cekongkir.html'
			}
		}
	})
	.state('eventmenu.cekongkirdetail', {
		url: '/cekongkirdetail',
		views: {
			'menuContent': {
				templateUrl: 'templates/cekongkirdetail.html'
			},
			'dashboard-tab': {
				templateUrl: 'templates/cekongkirdetail.html'
			}
		}
	})
	.state('eventmenu.chatting', {
		url: '/chatting',
		views: {
			'menuContent': {
				templateUrl: 'templates/chatting.html'
			},
			'chatting-tab' : {
				templateUrl: 'templates/chatting.html',
			},
		}
	})
	$urlRouterProvider.otherwise('/startup');
})

.run(function($ionicPlatform, $ionicLoading, $rootScope, $state, $ionicPopup, $ionicHistory, $http, productService, dataMessageService, $cordovaLocalNotifications) {
	$rootScope.shop_name = shop_name;

	var historyProduct = localStorage.getItem('historyProduct');
	if (historyProduct === null) {
		localStorage.setItem('historyProduct', '[]');
	}

	$rootScope.platform = ionic.Platform.platform();

	var link = base_url + 'check_app_version/' + $rootScope.platform;
	$http({
		method: 'GET',
		url: link,
		data: {},
		timeout: 8000
	}).then(function(res) {
		window.localStorage['number_version'] = 29;

		if (typeof window.localStorage['number_version'] === 'undefined') {
			window.localStorage['number_version'] = res.data.number_version;
		} else {
			if (window.localStorage['number_version'] < res.data.number_version) {
				var confirmPopup = $ionicPopup.confirm({
					title: 'Notifikasi',
					template: 'Anda Masih Menggunakan Aplikasi Versi Lama\n Silahkan Update Aplikasi CKEY Store Terbaru',
					cancelText: 'Cancel',
					okText: 'Update'
				});

				confirmPopup.then(function(x) {
					if (x) {
						window.open(res.data.link, '_system', 'location=yes,enableViewportScale=yes,hidden=no');
					} else {
						window.close();
						ionic.Platform.exitApp();
						navigator.app.exitApp();
					}
				});
			}
		}
	},
	function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$ionicPlatform.ready(function() {
		FCMPlugin.subscribeToTopic('ckeyjeans');
		FCMPlugin.getToken(function(token) {

			window.localStorage['registration_id'] = token;
			if (window.localStorage['customer_id'] != null) {
				var link = base_url + 'registering_gcm/' + token + '/' + window.localStorage['customer_id'];
				$http({
					method: 'POST',
					url: link,
					data: {},
					timeout: 8000
				}).then(function() {

				}, function() {
					$ionicLoading.hide();
					alert('Failed to continue, please check your internet connection');
				});
			}
		});

		FCMPlugin.onNotification(function(data) {
			console.log(data);
			var type = data.type.split('-');
			if (data.wasTapped) {
				$cordovaLocalNotifications.schedule({
					id: 1,
					title: data.title,
					text: data.text
				});
				if ($state.current.name != 'eventmenu.chatting') {
					$ionicPopup.alert({
						title: data.title,
						template: data.text
					});

					if (type[0] == 'chat') {
						alertPopup.then(function() {
							$rootScope.total_chat += 1;
							$state.go('eventmenu.chatting', {}, {
								reload: true
							});
						})
					}
					if (data.type == 'produk') {
						alertPopup.then(function() {
							productService.selectedProduct = data.id_produk;
							$state.go('eventmenu.detailbarang');
						});
					}
					if (type[0] == 'message') {
						alertPopup.then(function() {
							$rootScope.total_msg += 1;
							dataMessageService.selectedMessageId = type[1];
							$state.go('eventmenu.pesanmasukdetail');
						})
					}
				} else {
					$state.reload();
				}

			} else {
				$cordovaLocalNotifications.schedule({
					id: 1,
					title: data.title,
					text: data.text
				});
				if ($state.current.name != 'eventmenu.chatting') {
					var alertPopup = $ionicPopup.alert({
						title: data.title,
						template: data.text
					});
					if (type[0] == 'chat') {
						alertPopup.then(function() {
							$rootScope.total_chat += 1;
							$state.go('eventmenu.chatting', {}, {
								reload: true
							});
						})
					}
					if (data.type == 'produk') {
						alertPopup.then(function() {
							productService.selectedProduct = data.id_produk;
							$state.go('eventmenu.detailbarang');
						});
					}
					if (type[0] == 'message') {
						alertPopup.then(function() {
							$rootScope.total_msg += 1;
							dataMessageService.selectedMessageId = type[1];
							$state.go('eventmenu.pesanmasukdetail');
						})
					}
				} else {
					$state.reload();
				}
			}
		}, function() {

		}, function() {

		});

	});

	$rootScope.cancel = function() {
		$ionicLoading.hide()
	}

	function showConfirmExit() {
		var confirmPopup = $ionicPopup.confirm({
			title: 'Konfirmasi',
			template: 'Anda yakin ingin keluar aplikasi ?'
		});
		confirmPopup.then(function(res) {
			if (res) {
				window.close();
				ionic.Platform.exitApp();
				navigator.app.exitApp();
			}
		});
	}

	$rootScope.shop_name = shop_name;
	$rootScope.tipe_customer = window.localStorage['customer_type'];
	$rootScope.customer_name = window.localStorage['customer_name'];
	$rootScope.customer_id = window.localStorage['customer_id'];
	$ionicPlatform.registerBackButtonAction(function() {
		if ($state.current.name == 'eventmenu.dashboard') {
			showConfirmExit();
		} else if ($state.current.name == 'login') {
			showConfirmExit();
		} else if ($state.current.name == 'eventmenu.listpesananbarang') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.datapesanan') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.konfirmasipembayaran') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.kotakmasuk') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.info') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.rekening') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.pengaturan') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.update') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.register') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.login_inside') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.cekongkir') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.chatting') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.faq') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'faq') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'notifikasi') {
			showConfirmExit();
		} else if ($state.current.name == 'eventmenu.listdatadetailpesanan') {
			var history = $ionicHistory.backView();
			if (history === null) {
				$ionicHistory.nextViewOptions({
					disableBack: true
				});
				$state.go('eventmenu.dashboard');
			} else {
				$ionicHistory.goBack();
			}
		} else {
			page = 1;
			$ionicHistory.goBack();
		}
	}, 100);
})
.service('productService', function() {
	this.productService;
})
.service('dataPesananService', function() {
	this.dataPesananService;
})
.service('dataMessageService', function() {
	this.dataMessageService;
})
.service('listPesananService', function() {
	this.listPesananService;
})
.service('resiService', function() {
	this.resiService;
})
.service('newsService', function() {
	this.newsService;
})
.controller('startupController', function($scope, $state, $http, $ionicLoading, $window) {
	var customer_id = $window.localStorage['customer_id'];

	if (typeof customer_id === 'undefined') {
		$state.go('eventmenu.dashboard');
	} else {
		$state.go('eventmenu.dashboard');
	}

})
.controller('loginController', function($scope, $state, $http, $ionicLoading, $ionicPopup, $window, $cordovaFacebook, $cordovaGooglePlus) {
	$scope.postData = {};
	$scope.login = function() {
		$ionicLoading.show({
			template: loading,
			cancelable: true
		})
		var link = base_url + 'login';
		var registration_id = localStorage.getItem('registration_id')
		$http({
			method: 'POST',
			url: link,
			data: {
				customer_id: $scope.postData.customer_id,
				phone: $scope.postData.phone,
				password: $scope.postData.password,
				token: token,
				registration_id: registration_id == null ? null : registration_id
			},
			timeout: 8000
		}).then(
		function(res) {
			$ionicLoading.hide()
			$scope.response = res.data;

			/* check */
			if (res.data.status == 'Invalid Token') {
				check_token();
			}

			if (res.data.status == 'OFF') {
				check_status_aplikasi(res.data.message);
			}

			if (res.data.status == 'Member Not Found') {
				check_status_member_not_found();
			}
			if (res.data.status == 'Member Not Active') {
				check_status_member();
			}

			if (res.data.status == 'Success') {
				$window.localStorage['customer_id'] = res.data.customer_id;
				$window.localStorage['customer_email'] = res.data.customer_email;
				$window.localStorage['customer_name'] = res.data.customer_name;
				$window.localStorage['customer_phone'] = res.data.customer_phone;
				$window.localStorage['customer_type'] = res.data.customer_type;
				localStorage.setItem('vip_member', res.data.vip_member);
				document.location.href = 'index.html';
				setTimeout(function() {
					$window.location.reload(true);
				}, 1000);
			} else {
				$ionicPopup.alert({
					title: res.data.status,
					template: res.data.error
				});
			}
		},
		function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	};

	$scope.register = function() {
		$state.go('eventmenu.register');
	}

	$scope.loginFb = function () {
		$cordovaFacebook.login(['public_profile', 'email']).then(function(success) {
			console.log(success);
			$cordovaFacebook.api('/me?fields=name,email', []).then(function(user) {
				var data = {
					name: user.name,
					email: user.email,
					token: token,
					registration_id: localStorage.getItem('registration_id') || null
				};
				$scope.loginSocial(data);
			});
		}, function(error) {
			console.log(error);
		});
	}

	$scope.loginPhone = function() {
		$state.go('eventmenu.login_phone');
	}

	$scope.loginGoogle = function() {
		$ionicLoading.show();
		$cordovaGooglePlus.login({}).then(function(data) {
			$ionicLoading.hide();
			var data = {
				name: data.displayName,
				email: data.email,
				token: token,
				registration_id: localStorage.getItem('registration_id') || null
			};
			$scope.loginSocial(data);
		}).catch(function(error) {
			$ionicLoading.hide();
			alert(JSON.stringify(error));
		});
	}

	$scope.loginSocial = function(data) {
		$ionicLoading.show();
		$http({
			method: 'POST',
			url: base_url + 'loginSocial',
			data: data,
			timeout: 8000
		}).then(function (res) {
			$ionicLoading.hide();
			localStorage.setItem('customer_id', res.data.customer_id);
			localStorage.setItem('customer_email', res.data.customer_email);
			localStorage.setItem('customer_name', res.data.customer_name);
			localStorage.setItem('customer_phone', res.data.customer_phone);
			localStorage.setItem('customer_type', res.data.customer_type);
			localStorage.setItem('vip_member', res.data.vip_member);
			document.location.href = 'index.html';
			setTimeout(function () {
				$window.location.reload(true);
			}, 1000);
		}, function () {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}
})
.controller('registerController', function($scope, $state, $http, $ionicLoading, $ionicSideMenuDelegate, $window, $ionicPopup, $ionicHistory) {
	$scope.postData = {};

	$scope.editProfilKota = false;
	$scope.editProfilKecamatan = false;

	$ionicHistory.nextViewOptions({
		disableBack: false
	});

	var link_sales = base_url + '/get_sales';
	$http({
		method: 'GET',
		url: link_sales,
		data: {},
		timeout: 8000
	}).then(
	function(res) {
		$ionicLoading.hide()

		$scope.data_sales = res.data;
	},
	function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	var param = '?token=' + token_api + '&domain=' + domain_api;
	var link = base_url_api + '/province' + param;
	$http({
		method: 'GET',
		url: link,
		data: {},
		timeout: 8000
	}).then(
	function(res) {
		/* check */
		if (res.data.desc == 'Invalid Token') {
			check_token();
		}

		if (res.data.desc == 'OFF') {
			check_status_aplikasi(res.data.message);
		}
		if (res.data.desc == 'Member Not Found') {
			check_status_member_not_found();
		}
		if (res.data.desc == 'Member Not Active') {
			check_status_member();
		}
		/* end check */

		$ionicLoading.hide()

		$scope.data_provinsi = res.data.result;
	},
	function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});


	$scope.getKotaByProvinsi = function() {
		$ionicLoading.show()
		var param = '?token=' + token_api + '&domain=' + domain_api + '&province_id=' + $scope.postData.prov;
		var link = base_url_api + '/city' + param;

		$http({
			method: 'GET',
			url: link,
			data: {},
			timeout: 8000
		}).then(
		function(res) {
			$ionicLoading.hide();
			/* check */
			if (res.data.desc == 'Invalid Token') {
				check_token();
			}

			if (res.data.desc == 'OFF') {
				check_status_aplikasi(res.data.message);
			}
			if (res.data.desc == 'Member Not Found') {
				check_status_member_not_found();
			}
			if (res.data.desc == 'Member Not Active') {
				check_status_member();
			}
			/* end check */


			$scope.kota = '-Pilih Kota-';
			$scope.kota_id = '0';
			$scope.kecamatan = '-Pilih Kecamatan-';
			$scope.kecamatan_id = '0';

			$scope.editProfilKota = true;
			$scope.data_kota = res.data.result;
		},
		function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.getKecamatanByKota = function() {
		$ionicLoading.show()
		var param = '?token=' + token_api + '&domain=' + domain_api + '&city_id=' + $scope.postData.kota;
		var link = base_url_api + '/subdistrict' + param;

		$http({
			method: 'GET',
			url: link,
			data: {},
			timeout: 8000
		}).then(
		function(res) {
			$ionicLoading.hide()
			/* check */
			if (res.data.desc == 'Invalid Token') {
				check_token();
			}

			if (res.data.desc == 'OFF') {
				check_status_aplikasi(res.data.message);
			}
			if (res.data.desc == 'Member Not Found') {
				check_status_member_not_found();
			}
			if (res.data.desc == 'Member Not Active') {
				check_status_member();
			}
			/* end check */


			$scope.kecamatan = '-Pilih Kecamatan-';
			$scope.kecamatan_id = '0';

			$scope.editProfilKecamatan = true;
			$scope.data_kecamatan = res.data.result;
		},
		function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.submit_register = function() {

		var nama = $scope.postData.nama;
		var email = $scope.postData.email;
		var phone = $scope.postData.phone;
		var alamat = $scope.postData.address;
		var kodepos = $scope.postData.postcode;

		var password = $scope.postData.password;
		var confirm_password = $scope.postData.confirm_password;

		var provinsi = $scope.postData.prov;
		var kota = $scope.postData.kota;
		var kecamatan = $scope.postData.kecamatan;
		var sales = $scope.postData.sales;

		if (provinsi == '0' || provinsi == null) {
			provinsi = $scope.prov_id;
		}
		if (kota == '0' || kota == null) {
			kota = $scope.kota_id;
		}
		if (kecamatan == '0' || kecamatan == null) {
			kecamatan = $scope.kecamatan_id;
		}


		if ((nama != null) && (email != null) && (phone != null) && (alamat != null) && (kodepos != null) && (password != null) && (confirm_password != null) && (provinsi != null) && (kota != null) && (kecamatan != null) && (sales != null)) {
			if (password == confirm_password) {
				$ionicLoading.show()
				var link = base_url + 'register';

				$http({
					method: 'POST',
					url: link,
					data: {
						customer_id: window.localStorage['customer_id'],
						token: token,
						nama: nama,
						email: email,
						phone: phone,
						password: password,
						alamat: alamat,
						kodepos: kodepos,
						provinsi: provinsi,
						kota: kota,
						admin_id: sales,
						kecamatan: kecamatan
					},
					timeout: 8000
				}).then(
				function(res) {
					/* check */
					if (res.data.desc == 'Invalid Token') {
						check_token();
					}

					if (res.data.desc == 'OFF') {
						check_status_aplikasi(res.data.message);
					}
					if (res.data.desc == 'Member Not Found') {
						check_status_member_not_found();
					}
					if (res.data.desc == 'Member Not Active') {
						check_status_member();
					}
					/* end check */




					if (res.data.status == 'Success') {
						$window.localStorage['customer_id'] = res.data.customer_id;
						$window.localStorage['customer_email'] = res.data.customer_email;
						$window.localStorage['customer_name'] = res.data.customer_name;
						$window.localStorage['customer_phone'] = res.data.customer_phone;
						$window.localStorage['customer_type'] = res.data.customer_type;

						$ionicLoading.hide()
						var confirmPopup = $ionicPopup.alert({
							title: res.data.status,
							template: res.data.message
						});

						confirmPopup.then(function(res) {
							if (res) {
								document.location.href = 'index.html';
								setTimeout(function() {
									$window.location.reload(true);
								}, 1000);
							}
						});
					} else {
						$ionicLoading.hide();
						$ionicPopup.alert({
							title: res.data.status,
							template: res.data.error
						});
					}
				},
				function() {
					$ionicLoading.hide();
					alert('Failed to continue, please check your internet connection');
				});
			} else {
				$ionicPopup.alert({
					title: 'Notifikasi',
					template: 'Password Tidak Sama !'
				});
			}
		} else {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Form Tidak Boleh Kosong  !'
			});
		}

	}
})
.controller('menuController', function($scope, $state, $ionicPopup, $http, $ionicLoading, $ionicSideMenuDelegate, $window, $timeout, $rootScope, productService, dataPesananService, $ionicHistory) {

	$scope.customer_id = localStorage.getItem('customer_id');

	$scope.toDataPesanan = function(val) {
		if ($scope.customer_id === null) {
			$state.go('eventmenu.login_inside');
		} else {
			$ionicHistory.clearCache().then(function() {
				$ionicHistory.nextViewOptions({
					disableBack: true
				});
				$scope.back = false;
				$state.go('eventmenu.dashboard');
				$state.go('eventmenu.listdatapesanan');
				dataPesananService.jenisPesanan = val;
			});
		}
	}

	$scope.toDashboard = function() {
		$ionicHistory.clearCache().then(function() {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$scope.back = false;
			$state.go('eventmenu.dashboard');
		});
	}

	$scope.towishlist = function() {
		$ionicHistory.clearCache().then(function() {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$scope.back = false;
			$state.go('eventmenu.wishlist');
		});
	}

	$scope.toCart = function() {
		if ($scope.customer_id === null) {
			$state.go('eventmenu.login_inside');
		} else {
			$state.go('eventmenu.listpesananbarang', {}, { reload : true });
		}
	}

	$scope.toChatting = function() {
		if ($scope.customer_id === null) {
			$state.go('eventmenu.login_inside');
		} else {
			$state.go('eventmenu.chatting', {}, { reload : true });
		}
	}

	$scope.toAccount = function() {
		if ($scope.customer_id === null) {
			$state.go('eventmenu.login_inside');
		} else {
			$state.go('eventmenu.pengaturan', {}, { reload : true });
		}
	}

	$ionicLoading.show()
	var url = base_url + 'get_cart_total';
	$http({
		method: 'POST',
		url: url,
		data: {
			customer_id: window.localStorage['customer_id'],
			token: token
		},
		timeout: 10000
	}).then(
	function(res) {
		$ionicLoading.hide()
		/* check */
		if (res.data.status == 'Invalid Token') {
			check_token();
		}
		if (res.data.status == 'OFF') {
			check_status_aplikasi(res.data.message);
		}
		if (res.data.status == 'Member Not Found') {
			check_status_member_not_found();
		}
		if (res.data.status == 'Member Not Active') {
			check_status_member();
		}
		message_notif = res.data.status;
		/* end check */

		$rootScope.total_cart = res.data.total_cart
		$rootScope.total_chat = res.data.total_chat;
		$rootScope.wishlist = res.data.wishlist;
		$rootScope.total_msg = res.data.total_msg;
		$rootScope.total_order_unpaid = res.data.total_order_unpaid;
	},
	function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.logoCenterStyle = false;
	$timeout(function() {
		$scope.logoCenterStyle = true;
	}, 500);

	$scope.sidemenu = [{
		id: 1,
		name: 'Kategori Produk',
		img: 'category.jpeg',
		target: '#/event/dashboard',
		status: 'enabled',
		click: 'tipeKategori()'
	}, {
		id: 5,
		name: 'Cek Ongkir',
		img: 'cek-ongkir.jpeg',
		target: '#/event/cekongkir',
		status: 'enabled',
		click: ''
	}, {
		id: 6,
		name: 'Cek Resi',
		img: 'cek-resi.jpeg',
		target: '#/event/cekresidetail',
		status: 'enabled',
		click: ''
	}, {
		id: 4,
		name: 'Konfirmasi Pembayaran',
		img: 'confirm-payment.jpeg',
		target: '#/event/konfirmasipembayaran',
		status: 'enabled',
		click: ''
	}, {
		id: 7,
		name: 'Notifikasi',
		img: 'notif.jpeg',
		target: '#/event/kotakmasuk',
		status: 'enabled',
		click: '',
		badge_msg: true
	}, {
		id: 8,
		name: 'Info',
		img: 'information-outline.png',
		target: '#/event/info',
		status: 'enabled',
		click: ''
	}, {
		id: 8,
		name: 'Rekening',
		img: 'rekening.jpeg',
		target: '#/event/rekening',
		status: 'enabled',
		click: ''
	}, {
		id: 9,
		name: 'FAQ',
		img: 'faq.jpeg',
		target: '#/event/faq',
		status: 'enabled',
		click: ''
	},
		// {
		// 	id: 10,
		// 	name: 'Pengaturan',
		// 	img: 'settings.png',
		// 	target: '#/event/pengaturan',
		// 	status: 'enabled',
		// 	click: ''
		// },
		{
			id: 11,
			name: 'Update',
			img: 'update.jpeg',
			target: '#/event/update',
			status: 'enabled',
			click: ''
		}];

		var customer_id = $window.localStorage['customer_id'];

		if (typeof customer_id === 'undefined') {
			$scope.sidemenu = [
			{
				id: 1,
				name: 'Kategori Produk',
				img: 'category.jpeg',
				target: '#/event/dashboard',
				status: 'enabled',
				click: 'tipeKategori()'
			}, {
				id: 8,
				name: 'Info',
				img: 'information-outline.png',
				target: '#/event/info',
				status: 'enabled',
				click: ''
			}, {
				id: 8,
				name: 'Rekening',
				img: 'rekening.jpeg',
				target: '#/event/rekening',
				status: 'enabled',
				click: ''
			}, {
				id: 7,
				name: 'Masuk / Daftar',
				img: 'account.png',
				target: '#/event/login_inside',
				status: 'enabled',
				click: ''
			}, ];
		}

		$scope.toggleLeft = function() {
			$ionicSideMenuDelegate.toggleLeft();
		};
		$scope.menuUtama = function() {
			$scope.sidemenu = [{
				id: 1,
				name: 'Kategori Produk',
				img: 'category.jpeg',
				target: '#/event/dashboard',
				status: 'enabled',
				click: 'tipeKategori()'
			}, {
				id: 5,
				name: 'Cek Ongkir',
				img: 'cek-ongkir.jpeg',
				target: '#/event/cekongkir',
				status: 'enabled',
				click: ''
			}, {
				id: 6,
				name: 'Cek Resi',
				img: 'cek-resi.jpeg',
				target: '#/event/cekresidetail',
				status: 'enabled',
				click: ''
			}, {
				id: 4,
				name: 'Konfirmasi Pembayaran',
				img: 'confirm-payment.jpeg',
				target: '#/event/konfirmasipembayaran',
				status: 'enabled',
				click: ''
			}, {
				id: 7,
				name: 'Notifikasi',
				img: 'notif.jpeg',
				target: '#/event/kotakmasuk',
				status: 'enabled',
				click: '',
				badge_msg: true
			}, {
				id: 8,
				name: 'Info',
				img: 'information-outline.png',
				target: '#/event/info',
				status: 'enabled',
				click: ''
			}, {
				id: 8,
				name: 'Rekening',
				img: 'rekening.jpeg',
				target: '#/event/rekening',
				status: 'enabled',
				click: ''
			}, {
				id: 9,
				name: 'FAQ',
				img: 'faq.jpeg',
				target: '#/event/faq',
				status: 'enabled',
				click: ''
			}, {
				id: 10,
				name: 'Pengaturan',
				img: 'settings.png',
				target: '#/event/pengaturan',
				status: 'enabled',
				click: ''
			}, {
				id: 11,
				name: 'Update',
				img: 'update.jpeg',
				target: '#/event/update',
				status: 'enabled',
				click: ''
			}];

			if (typeof customer_id === 'undefined') {
				$scope.sidemenu = [
				{
					id: 1,
					name: 'Kategori Produk',
					img: 'category.jpeg',
					target: '#/event/dashboard',
					status: 'enabled',
					click: 'tipeKategori()'
				}, {
					id: 8,
					name: 'Info',
					img: 'information-outline.png',
					target: '#/event/info',
					status: 'enabled',
					click: ''
				}, {
					id: 8,
					name: 'Rekening',
					img: 'rekening.jpeg',
					target: '#/event/rekening',
					status: 'enabled',
					click: ''
				}, {
					id: 7,
					name: 'Masuk / Daftar',
					img: 'account.png',
					target: '#/event/login_inside',
					status: 'enabled',
					click: ''
				}, ];
			}
		}

		$scope.tipeKategori = function() {
			$scope.sidemenu = [{
				id: 0,
				name: 'Kategori Produk',
				img: 'left-arrow.png',
				target: '',
				status: 'enabled',
				click: 'menuUtama()'
			}, {
				id: 1,
				name: 'Woman',
				img: '',
				target: '#/event/tipeKategori/woman',
				status: 'enabled',
				click: 'kategoriSide("woman", "WOMAN")'
			}, {
				id: 2,
				name: 'Man',
				img: '',
				target: '#/event/tipeKategori/man',
				status: 'enabled',
				click: 'kategoriSide("man", "MAN")'
			}, {
				id: 3,
				name: 'NEW',
				img: '',
				target: '',
				status: 'enabled',
				click: 'filterCategory("hot_sale", "NEW")'
			}, {
				id: 4,
				name: 'Promo',
				img: '',
				target: '',
				status: 'enabled',
				click: 'filterCategory("promo", "Promo")'
			}, {
				id: 5,
				name: 'VIP Member',
				img: '',
				target: '',
				status: 'enabled',
				click: 'filterCategory("product_vip", "VIP Member")'
			}];
		}

		$scope.filterCategory = function(id, category) {
			if (localStorage.getItem('vip_member') != 'Ya' && id == 'product_vip') {
				$ionicPopup.alert({
					title: 'Alert',
					template: 'Menu Ini Khusus VIP Member'
				});
			} else {
				$ionicSideMenuDelegate.toggleLeft();
				productService.category = id;
				productService.category_name = category;
				productService.page = 1;

				// $ionicHistory.clearCache().then(function() {
					$state.go('eventmenu.dashboardCategory');
				// });
			}
		}

		$scope.kategoriSide = function(tipe) {
			$scope.tipe = tipe;
			$ionicLoading.show();
			$scope.sidemenu = [{
				id: 0,
				name: tipe.charAt(0).toUpperCase() + tipe.substr(1).toLowerCase(),
				img: 'left-arrow.png',
				target: '',
				status: 'enabled',
				click: 'tipeKategori()'
			}];

			$scope.back = true;

			var link = base_url + 'get_list_product_category';

			$http({
				method: 'POST',
				url: link,
				data: {
					customer_id: window.localStorage['customer_id'],
					token: token,
					tipe: tipe
				},
				timeout: 10000
			}).then(function(res) {
				if (res.data.status == 'Success') {
					$scope.category = res.data;
					var json = res.data.category;

					for (var x = 0; x < json.length; x++) {
						$scope.sidemenu.push({
							id: json[x].id,
							name: json[x].name,
							icon: '',
							target: '#/event/subKategori/' + json[x].id,
							status: 'enabled',
							click: 'subKategoriSide(' + json[x].id + ', "' + json[x].name + '")'
						});
					}
					$ionicLoading.hide();
				} else {
					$ionicLoading.hide();
					$ionicPopup.alert({
						title: 'Alert',
						template: 'No Data'
					});
				}
			}, function() {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});

			$scope.filterCategory = function(id, category) {
				if (localStorage.getItem('vip_member') != 'Ya' && id == 'product_vip') {
					$ionicPopup.alert({
						title: 'Alert',
						template: 'Menu Ini Khusus VIP Member'
					});
				} else {
					$ionicSideMenuDelegate.toggleLeft();
					productService.category = id;
					productService.category_name = category;
					productService.page = 1;

					// $ionicHistory.clearCache().then(function() {
						$state.go('eventmenu.dashboardCategory');
					// });
				}
			}

		};

		$scope.subKategoriSide = function(id, category) {
			$scope.back = true;

			if (typeof id === 'undefined') {
				alert('Tidak ada data');
			} else {
				productService.category_name = category;
				$ionicLoading.show();
				$scope.sidemenu = [{
					id: 0,
					name: category,
					img: 'left-arrow.png',
					target: '',
					status: 'enabled',
					click: 'kategoriSide("' + $scope.tipe + '")'
				}];

				var link = base_url + 'get_list_product_subcategory';

				$http({
					method: 'POST',
					url: link,
					data: {
						customer_id: window.localStorage['customer_id'],
						category_id: id,
						token: token
					},
					timeout: 10000
				}).then(function(res) {
					$scope.category = res.data;
					var json = res.data.category;
					if (res.data.status === 'Error') {
						alert('Tidak ada data');
						$scope.kategoriSide();
					} else {
						for (var x = 0; x < json.length; x++) {
							$scope.sidemenu.push({
								id: json[x].id,
								name: json[x].name,
								icon: '',
								target: '',
								status: 'enabled',
								click: 'filterCategory(' + json[x].id + ', "' + json[x].name + '")'
							});
						}
					}
					$ionicLoading.hide()
				}, function() {
					$ionicLoading.hide();
					alert('Failed to continue, please check your internet connection');
				});

				$scope.filterCategory = function(id, category) {
					if (localStorage.getItem('vip_member') != 'Ya' && id == 'product_vip') {
						$ionicPopup.alert({
							title: 'Alert',
							template: 'Menu Ini Khusus VIP Member'
						});
					} else {
						$ionicSideMenuDelegate.toggleLeft();
						$scope.menuUtama();

						productService.category = id;
						productService.category_name = category;
						productService.page = 1;

						// $ionicHistory.clearCache().then(function() {
							$state.go('eventmenu.dashboardCategory');
						// });
					}
				}

				$scope.allCategory = function() {
					$window.location.reload(true);
				}
			}
		}

		$scope.login = function() {
			$state.go('login', {
				location: 'replace'
			});
		}

	})
.controller('katalogController', function($scope, $state, $http, $ionicLoading, $timeout, $ionicHistory, $window, $ionicPopup, $ionicSlideBoxDelegate, productService, dataMessageService, $ionicNavBarDelegate, ionicToast, newsService, $rootScope) {

	$scope.postDataSearch = {};
	$scope.slideChanged = function(index) {
		$scope.slideIndex = index;
	};

	$scope.tipe_customer = localStorage.getItem('customer_type');

	$scope.back = false;

	$scope.openLink = function(link, name) {
		if (name !== undefined) {
			productService.category_name = name;
		}
		if (link != '') {
			link = link.replace('://ckeystore.com/dev/', '');
			link = link.replace('http://ckeystore.com/dev/', '');
			link = link.replace('://ckeystore.com/', '');
			link = link.replace('http://ckeystore.com/', '');
			link = link.split('/');
			if (link[1] == 'product_type') {
				$state.go('eventmenu.tipeKategori', {
					type: link[2]
				}, {
					reload: true
				});
			} else if (link[1] == 'product_category') {
				var subKategori_id = link[2].split('-');
				$state.go('eventmenu.subKategori', {
					category: subKategori_id[0]
				}, {
					reload: true
				});
			} else if (link[1] == 'product_subcategory_ready') {
				productService.category = link[2];
				productService.page = 1;
					// $ionicHistory.clearCache().then(function() {
						$state.go('eventmenu.dashboardCategory', {
							category: link[2]
						});
					// });
				} else if (link[1] == 'new_product') {
					productService.category = 'hot_sale';
					productService.page = 1;
					// $ionicHistory.clearCache().then(function() {
						$state.go('eventmenu.dashboardCategory');
					// });
				} else if (link[1] == 'product_promo') {
					productService.category = 'promo';
					productService.page = 1;
					// $ionicHistory.clearCache().then(function() {
						$state.go('eventmenu.dashboardCategory');
					// });
				} else if (link[1] == 'news_detail') {
					newsService.id = link[2];
					$state.go('eventmenu.newsDetail');
				}
			}
		}

		get_data();

		function get_data() {
			var link = base_url + 'get_data_banner';
			var registration_id = localStorage.getItem('registration_id')
			$http({
				method: 'POST',
				url: link,
				data: {
					customer_id: window.localStorage['customer_id'],
					token: token,
					registration_id: registration_id == null ? null : registration_id
				},
				timeout: 8000
			}).then(function(res) {
				$ionicLoading.hide();
				/* check */
				if (res.data.status == 'Invalid Token') {
					check_token();
				}
				if (res.data.status == 'OFF') {
					check_status_aplikasi(res.data.message);
				}
				if (res.data.status == 'Member Not Found') {
					check_status_member_not_found();
				}
				if (res.data.status == 'Member Not Active') {
					check_status_member();
				}
				$scope.list_image_atas = [];
				$scope.list_image_bawah = [];
				$scope.list_image_bawah_atas = [];
				$scope.list_image_bawah_tengah = [];
				$scope.list_image_bawah_kiri = [];
				$scope.list_image_bawah_kanan = [];
				res.data.map(function(img) {
					if (img.posisi_banner == 'Atas') {
						$scope.list_image_atas.push(img);
					} else if (img.posisi_banner == 'Bawah') {
						$scope.list_image_bawah.push(img);
					} else if (img.posisi_banner == 'Bagian Bawah - Atas') {
						$scope.list_image_bawah_atas.push(img);
					}  else if (img.posisi_banner == 'Bagian Bawah - Tengah') {
						$scope.list_image_bawah_tengah.push(img);
					}  else if (img.posisi_banner == 'Bagian Bawah - Bawah Kiri') {
						$scope.list_image_bawah_kiri.push(img);
					}  else if (img.posisi_banner == 'Bagian Bawah - Bawah Kanan') {
						$scope.list_image_bawah_kanan.push(img);
					}
				});

				if (dataMessageService.message) {
					$ionicPopup.alert({
						title: 'Notifikasi',
						template: dataMessageService.message
					});
				}
			},
			function() {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});

			$ionicLoading.show();
			var link_dashboard = base_url + 'get_list_product_dashboard';
			$http({
				method: 'POST',
				url: link_dashboard,
				data: {
					customer_id: window.localStorage['customer_id'],
					category: 'all',
					page: page,
					token: token
				},
				timeout: 8000
			}).then(function(res) {
				$ionicLoading.hide()
				/* check */
				if (res.data.status == 'Invalid Token') {
					check_token();
				}
				if (res.data.status == 'OFF') {
					check_status_aplikasi(res.data.message);
				}
				if (res.data.status == 'Member Not Found') {
					check_status_member_not_found();
				}
				if (res.data.status == 'Member Not Active') {
					check_status_member();
				}
				message_notif = res.data.status;
				/* end check */

				$scope.katalog = res.data.product;
				$scope.hot_sale = res.data.hot_sale;
				$scope.category_woman = res.data.category_woman;
				$scope.category_man = res.data.category_man;
				$scope.productCategories = $scope.category_woman;
				$scope.categoryProduct = 'woman';
				localStorage.setItem('vip_member', res.data.vip_member);
				if (res.data.status == 'Not_found') {
					$ionicPopup.alert({
						title: 'Alert',
						template: 'No Data'
					});
				}

				setTimeout(function() {
					var new_product = document.getElementById('new-product-0');
					if (new_product !== null) {
						var heightImg = new_product.clientHeight;
						$scope.heightImgAll = {
							'height': heightImg + 'px',
							'background': '#f6cece'
						};
						$scope.showAllProductImage = true;
					}
				}, 1000);
			},
			function() {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		}

		$scope.setCategory = function(category) {
			$scope.categoryProduct = category;
			$scope.productCategories = category == 'man' ? $scope.category_man : $scope.category_woman;
		}

		$scope.toAllNewProduct = function() {
			productService.category = 'hot_sale';
			productService.category_name = 'NEW';
			productService.page = 1;
			// $ionicHistory.clearCache().then(function() {
				$state.go('eventmenu.dashboardCategory');
			// });
		}

		$scope.cari_produk = function() {
			$ionicHistory.clearCache().then(function() {
				productService.keyword = $scope.postDataSearch.pencarian;
				$state.go('eventmenu.dashboardSearch');
			});
		}

		$scope.detailBarang = function(id, category) {
			productService.selectedProduct = id;
			productService.category_name = category;
			page = 1;

			$state.go('eventmenu.detailbarang');
		}

		$scope.moreDataCanBeLoaded = function() {
			return true;
		}
		$scope.loadMoreData = function() {
			$ionicLoading.show()
			page += 1;

			var link = base_url + 'get_list_product_dashboard';
			$http({
				method: 'POST',
				url: link,
				data: {
					customer_id: window.localStorage['customer_id'],
					category: 'all',
					page: page,
					token: token
				},
				timeout: 8000
			}).then(function(res) {
				$ionicLoading.hide();
				var json = res.data;

				if (json != null) {
					if (json.status != 'Failed') {
						var length_j = Object.keys(json.product).length;

						if ($scope.katalog.length < json.total_product) {
							for (var x = 0; x < length_j; x++) {
								var img_thumbnail = json.product[x].img_thumbnail;
								$scope.katalog.push({
									product_id: json.product[x].product_id,
									name_item: json.product[x].name_item,
									product_name: json.product[x].product_name,
									harga: json.product[x].harga,
									harga_lama: json.product[x].harga_lama,
									diskon_persen: json.product[x].diskon_persen,
									img_thumbnail: img_thumbnail,
									stock_variant: json.product[x].stock_variant,
									promo: json.product[x].promo,
									hot_sale: json.product[x].hot_sale,
								});
							}
							$scope.moredata = true;
							$scope.$broadcast('scroll.infiniteScrollComplete');
						}
					}
				}
				localStorage.setItem('vip_member', res.data.vip_member);
			},
			function() {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		};

		$scope.doRefresh = function() {
			get_data();
			$scope.$broadcast('scroll.refreshComplete');
		};

		$scope.actionWishList = function(product_id, index, type) {
			var customer_id = localStorage.getItem('customer_id');
			if (customer_id === null) {
				$ionicPopup.alert({
					title: 'Alert',
					template: 'Silahkan masuk/daftar terlebih dahulu'
				});
				return false;
			}
			$ionicLoading.show();
			var link_wishlist = $scope.katalog[index].wish_list ? 'removeWishlist' : 'addWishlist';
			if (type == 'hot_sale') {
				link_wishlist = $scope.hot_sale[index].wish_list ? 'removeWishlist' : 'addWishlist';
			}

			var link = base_url + link_wishlist;
			$http({
				method: 'POST',
				url: link,
				data: {
					customer_id: window.localStorage['customer_id'],
					product_id: product_id,
					token: token
				},
				timeout: 8000
			}).then(function(res) {
				$ionicLoading.hide();
				/* check */
				if (res.data.status == 'Invalid Token') {
					check_token();
				}
				if (res.data.status == 'OFF') {
					check_status_aplikasi(res.data.message);
				}
				if (res.data.status == 'Member Not Found') {
					check_status_member_not_found();
				}
				if (res.data.status == 'Member Not Active') {
					check_status_member();
				}
				message_notif = res.data.status;
				/* end check */
				if (type == 'hot_sale') {
					$scope.hot_sale[index].wish_list = !$scope.hot_sale[index].wish_list;
				} else {
					$scope.katalog[index].wish_list = !$scope.katalog[index].wish_list;
				}
				$rootScope.wishlist = res.data.wishlist;
				ionicToast.show(res.data.message, 'bottom', false, 2000);
			},
			function() {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		}

	})
.controller('katalogCategoryController', function($scope, $state, $http, $ionicLoading, $timeout, $ionicHistory, $window, $ionicPopup, $ionicSlideBoxDelegate, productService, ionicToast, $rootScope, $ionicModal) {
	$scope.filterPrice = 'Retail';
	$scope.three_list = false;
	var priceSetting = localStorage.getItem('price');
	if (priceSetting) {
		$scope.filterPrice = priceSetting;
	}else{
		$scope.filterPrice = $scope.filterPrice;
	}

	$scope.title = productService.category_name;
	$ionicLoading.show();
	var page = 1;
	$scope.openLink = function(link, name) {
		if (name !== undefined) {
			productService.category_name = name;
		}
		if (link != '') {
			link = link.replace('://ckeystore.com/dev/', '');
			link = link.replace('http://ckeystore.com/dev/', '');
			link = link.replace('://ckeystore.com/', '');
			link = link.replace('http://ckeystore.com/', '');
			link = link.split('/');
			if (link[1] == 'product_type') {
				$state.go('eventmenu.tipeKategori', {
					type: link[2]
				}, {
					reload: true
				});
			} else if (link[1] == 'product_category') {
				var subKategori_id = link[2].split('-');
				$state.go('eventmenu.subKategori', {
					category: subKategori_id[0]
				}, {
					reload: true
				});
			} else if (link[1] == 'product_subcategory_ready') {
				productService.category = link[2];
				productService.page = 1;
					// $ionicHistory.clearCache().then(function() {
						$state.go('eventmenu.dashboardCategory', {
							category: link[2]
						});
					// });
				} else if (link[1] == 'new_product') {
					productService.category = 'hot_sale';
					productService.page = 1;
					// $ionicHistory.clearCache().then(function() {
						$state.go('eventmenu.dashboardCategory');
					// });
				} else if (link[1] == 'product_promo') {
					productService.category = 'promo';
					productService.page = 1;
					// $ionicHistory.clearCache().then(function() {
						$state.go('eventmenu.dashboardCategory');
					// });
				} else if (link[1] == 'news_detail') {
					newsService.id = link[2];
					$state.go('eventmenu.newsDetail');
				}
			}
		}
		var link = base_url + 'get_list_product';
		$http({
			method: 'POST',
			url: link,
			data: {
				price: $scope.filterPrice,
				customer_id: window.localStorage['customer_id'],
				category: productService.category,
				page: page,
				token: token
			},
			timeout: 8000
		}).then(function(res) {
			$ionicLoading.hide()
			/* check */
			if (res.data.status == 'Invalid Token') {
				check_token();
			}
			if (res.data.status == 'OFF') {
				check_status_aplikasi(res.data.message);
			}
			if (res.data.status == 'Member Not Found') {
				check_status_member_not_found();
			}
			if (res.data.status == 'Member Not Active') {
				check_status_member();
			}
			message_notif = res.data.status;
			/* end check */

			$scope.categories = res.data.category;
			$scope.katalog = res.data.product;
			if (res.data.status == 'Not_found') {
				$ionicPopup.alert({
					title: 'Alert',
					template: 'No Data'
				});
			}
		},
		function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});

		$scope.cari_produk = function() {
			$ionicHistory.clearCache().then(function() {
				productService.keyword = $scope.postDataSearch.pencarian;
				$state.go('eventmenu.dashboardSearch');
			});
		}

		$scope.detailBarang = function(id, category) {
			productService.category_name = category;
			productService.selectedProduct = id;
			page = 1;

			$state.go('eventmenu.detailbarang');
		}

		$scope.changeViewSetting = function() {
			$scope.three_list = !$scope.three_list;
		}

		$scope.changePriceSetting = function(value) {
			$scope.$broadcast('scroll.infiniteScrollComplete');
			page = 1;
			localStorage.setItem('price', value);
			$scope.filterPrice = value;
			$http({
				method: 'POST',
				url: link,
				data: {
					size: $scope.filterSize,
					price: $scope.filterPrice,
					category: productService.category,
					page: page,
					token: token,
					customer_id: localStorage.getItem('customer_id')
				},
				timeout: 8000
			}).then(
			function(res) {
				$ionicLoading.hide();
				/* check */
				if (res.data.status == 'Invalid Token') {
					check_token();
				}
				if (res.data.status == 'OFF') {
					check_status_aplikasi(res.data.message);
				}
				if (res.data.status == 'Member Not Found') {
					check_status_member_not_found();
				}
				if (res.data.status == 'Member Not Active') {
					check_status_member();
				}
				message_notif = res.data.status;
				/* end check */

				$scope.katalog = res.data.product;
				$scope.categories = res.data.category;

				if (res.data.status == 'Not_found') {
					$ionicPopup.alert({
						title: 'Alert',
						template: 'No Data'
					});
				}
			},
			function() {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		}

		$scope.changeSizeSetting = function(value) {
			$scope.$broadcast('scroll.infiniteScrollComplete');
			page = 1;
			$scope.filterSize = value;
			$http({
				method: 'POST',
				url: link,
				data: {
					size: value,
					price: $scope.filterPrice,
					category: productService.category,
					page: page,
					token: token,
					customer_id: localStorage.getItem('customer_id')
				},
				timeout: 8000
			}).then(
			function(res) {
				$ionicLoading.hide();
				/* check */
				if (res.data.status == 'Invalid Token') {
					check_token();
				}
				if (res.data.status == 'OFF') {
					check_status_aplikasi(res.data.message);
				}
				if (res.data.status == 'Member Not Found') {
					check_status_member_not_found();
				}
				if (res.data.status == 'Member Not Active') {
					check_status_member();
				}
				message_notif = res.data.status;
				/* end check */

				$scope.katalog = res.data.product;
				$scope.categories = res.data.category;

				if (res.data.status == 'Not_found') {
					$ionicPopup.alert({
						title: 'Alert',
						template: 'No Data'
					});
				}
			},
			function() {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		}

		$ionicModal.fromTemplateUrl('templates/modalPrice.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modalPrice = modal;
		});

		$scope.openModalPrice = function() {
			$scope.modalPrice.show();
		};

		$scope.closeModalPrice = function() {
			$scope.modalPrice.hide();
		};

		$ionicModal.fromTemplateUrl('templates/modalSize.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modalSize = modal;
		});

		$scope.openModalSize = function() {
			$scope.modalSize.show();
		};

		$scope.closeModalSize = function() {
			$scope.modalSize.hide();
		};

		$scope.actionWishList = function(product_id, index) {
			$ionicLoading.show();
			var link_wishlist = $scope.katalog[index].wish_list ? 'removeWishlist' : 'addWishlist';
			var link = base_url + link_wishlist;
			$http({
				method: 'POST',
				url: link,
				data: {
					customer_id: window.localStorage['customer_id'],
					product_id: product_id,
					token: token
				},
				timeout: 8000
			}).then(function(res) {
				$ionicLoading.hide();
				/* check */
				if (res.data.status == 'Invalid Token') {
					check_token();
				}
				if (res.data.status == 'OFF') {
					check_status_aplikasi(res.data.message);
				}
				if (res.data.status == 'Member Not Found') {
					check_status_member_not_found();
				}
				if (res.data.status == 'Member Not Active') {
					check_status_member();
				}
				message_notif = res.data.status;
				/* end check */
				$scope.katalog[index].wish_list = !$scope.katalog[index].wish_list;
				$rootScope.wishlist = res.data.wishlist;
				ionicToast.show(res.data.message, 'bottom', false, 2000);
			},
			function() {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		}

		$scope.moreDataCanBeLoaded = function() {
			return true;
		}
		$scope.loadMoreData = function() {
			$ionicLoading.show();
			page += 1;
			productService.page += 1;

			var link = base_url + 'get_list_product';
			$http({
				method: 'POST',
				url: link,
				data: {
					size: $scope.filterSize,
					price: $scope.filterPrice,
					customer_id: window.localStorage['customer_id'],
					category: productService.category,
					page: page,
					token: token
				},
				timeout: 8000
			}).then(function(res) {
				$ionicLoading.hide();
				var json = res.data;

				if (json != null) {
					if (json.status != 'Failed') {
						var length_j = Object.keys(json.product).length;


						if ($scope.katalog.length < json.total_product) {
							for (var x = 0; x < length_j; x++) {
								$scope.katalog.push({
									product_id: json.product[x].product_id,
									name_item: json.product[x].name_item,
									product_name: json.product[x].product_name,
									harga: json.product[x].harga,
									img_thumbnail: json.product[x].img_thumbnail,
									harga_lama: json.product[x].harga_lama,
									diskon_persen: json.product[x].diskon_persen,
									stock_variant: json.product[x].stock_variant,
									promo: json.product[x].promo,
									hot_sale: json.product[x].hot_sale,
								});
							}
							$scope.moredata = true;
							$scope.$broadcast('scroll.infiniteScrollComplete');
						}
					}
				}
			},
			function() {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		};
	})
.controller('wishlistController', function($scope, $state, $http, $ionicLoading, productService, ionicToast, $ionicHistory, $rootScope, $ionicPopup) {
	$scope.postDataSearch = {};

	$scope.back = true;

	$scope.toDashboard = function() {
		$ionicHistory.clearCache().then(function() {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$scope.back = false;
			$state.go('eventmenu.dashboard');
		});
	}

	$ionicLoading.show();
	var link = base_url + 'wishlist';
	$http({
		method: 'POST',
		url: link,
		data: {
			customer_id: window.localStorage['customer_id'],
			category: productService.category,
			page: productService.page,
			token: token
		},
		timeout: 8000
	}).then(function(res) {
		$ionicLoading.hide();
		/* check */
		if (res.data.status == 'Invalid Token') {
			check_token();
		}
		if (res.data.status == 'OFF') {
			check_status_aplikasi(res.data.message);
		}
		if (res.data.status == 'Member Not Found') {
			check_status_member_not_found();
		}
		if (res.data.status == 'Member Not Active') {
			check_status_member();
		}
		message_notif = res.data.status;
		/* end check */

		if (res.data.length == 0) {
			ionicToast.show('Tidak ada wishlist', 'bottom', false, 3000);
		} else {
			$scope.katalog = res.data;
		}
	},
	function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.detailBarang = function(id, category) {
		productService.category_name = category;
		productService.selectedProduct = id;
		page = 1;
		$state.go('eventmenu.detailbarang');
	}

	$scope.removeWishList = function(id, index) {
		$ionicLoading.show();
		var link = base_url + 'removeWishlist';
		$http({
			method: 'POST',
			url: link,
			data: {
				customer_id: window.localStorage['customer_id'],
				token: token,
				product_id: id
			},
			timeout: 8000
		}).then(function(res) {
			$ionicLoading.hide();
			/* check */
			if (res.data.status == 'Invalid Token') {
				check_token();
			}
			if (res.data.status == 'OFF') {
				check_status_aplikasi(res.data.message);
			}
			if (res.data.status == 'Member Not Found') {
				check_status_member_not_found();
			}
			if (res.data.status == 'Member Not Active') {
				check_status_member();
			}
			message_notif = res.data.status;
			/* end check */
			$scope.katalog.splice(index, 1);
			$rootScope.wishlist = res.data.wishlist;
			ionicToast.show(res.data.message, 'bottom', false, 2000);
		}, function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.clearWishList = function() {
		$ionicLoading.show();
		var link = base_url + 'clearWishlist';
		$http({
			method: 'POST',
			url: link,
			data: {
				customer_id: window.localStorage['customer_id'],
				token: token
			},
			timeout: 8000
		}).then(function (res) {
			$ionicLoading.hide();
			/* check */
			if (res.data.status == 'Invalid Token') {
				check_token();
			}
			if (res.data.status == 'OFF') {
				check_status_aplikasi(res.data.message);
			}
			if (res.data.status == 'Member Not Found') {
				check_status_member_not_found();
			}
			if (res.data.status == 'Member Not Active') {
				check_status_member();
			}
			message_notif = res.data.status;
			/* end check */
			$scope.katalog = [];
			$rootScope.wishlist = false;
			ionicToast.show(res.data.message, 'bottom', false, 2000);
		}, function () {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.confirmClearWishlist = function() {
		var confirmPopup = $ionicPopup.confirm({
			title: 'Konfirmasi',
			template: 'Hapus semua wishlist ?'
		});

		confirmPopup.then(function(res) {
			if (res) {
				$scope.clearWishList();
			}
		});
	}

})
.controller('detailBarangController', function($scope, $state, $http, $ionicLoading, $ionicHistory, $window, $ionicPopup, $timeout, $ionicSlideBoxDelegate, productService, $rootScope, $ionicModal, $ionicActionSheet, ionicToast, $cordovaPhotoViewer, $cordovaSocialSharing) {
	$scope.productService = productService;
	$scope.postDataOrder = {};
	var array_image = [];
	$scope.slideboxStyle = false;

	var historyProduct = JSON.parse(localStorage.getItem('historyProduct'));
	$scope.historyProduct = historyProduct;

	$scope.nav_title = productService.category_name;

	$scope.customer_name = localStorage.getItem('customer_name');
	$scope.customer_id = localStorage.getItem('customer_id');
	if ($scope.customer_id === null) {
		$scope.isLogin = false;
	} else {
		$scope.isLogin = true;
	}

	get_detail_product();

	$scope.list_variant = [];
	$scope.variant_option = '';

	function get_detail_product() {
		$ionicLoading.show()
		var url = base_url + 'get_cart_total';
		$http({
			method: 'POST',
			url: url,
			data: {
				customer_id: window.localStorage['customer_id'],
				token: token
			},
			timeout: 10000
		}).then(function(res) {
			$ionicLoading.hide();
			/* check */
			if (res.data.status == 'Invalid Token') {
				check_token();
			}
			if (res.data.status == 'OFF') {
				check_status_aplikasi(res.data.message);
			}
			if (res.data.status == 'Member Not Found') {
				check_status_member_not_found();
			}
			if (res.data.status == 'Member Not Active') {
				check_status_member();
			}
			message_notif = res.data.status;
			/* end check */

			$rootScope.total_cart = res.data.total_cart;
			$rootScope.total_chat = res.data.total_chat;
			$rootScope.wishlist = res.data.wishlist;
			$rootScope.total_msg = res.data.total_msg;
			$rootScope.total_order_unpaid = res.data.total_order_unpaid;
			localStorage.setItem('customer_type', res.data.tipe_customer);
		},
		function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});

		$ionicLoading.show();
		var link = base_url + 'get_detail_product';
		$http({
			method: 'POST',
			url: link,
			data: {
				customer_id: window.localStorage['customer_id'],
				product_id: productService.selectedProduct,
				token: token
			},
			timeout: 8000
		}).then(function(res) {
			$ionicLoading.hide();

			$scope.name_item = res.data.name_item;
			$scope.product_name = res.data.product_name;
			$scope.product_harga = res.data.harga;
			$scope.product_harga_formated = toRp(res.data.harga);
			$scope.product_keterangan = res.data.keterangan;

			$scope.size_jeans = res.data.size_jeans;
			$scope.src_size_jeans = res.data.src_size_jeans;

			$scope.detail_produk = res.data.detail_produk;

			$scope.berat = res.data.berat;

			$scope.img_url = res.data.img_large;

			$scope.product_min_order = res.data.min_order;
			$scope.product_id = res.data.product_id;
			$scope.product_harga_lama = res.data.harga_lama;
			$scope.product_img_large = res.data.img_large;
			$scope.product_img_medium = res.data.img_medium;
			$scope.product_img_thumbnail = res.data.img_thumbnail;
			$scope.diskon_persen = res.data.variant[0].diskon_persen;
			$scope.tipe_customer = res.data.status_harga_customer;
			localStorage.setItem('customer_type', $scope.tipe_customer);

			historyProduct.map(function(val, i) {
				if (val.id == $scope.product_id) {
					historyProduct.splice(i, 1);
				}
			});
			if (historyProduct.length > 10) {
				historyProduct.splice(10, 10);
			}

			var product = {
				id: $scope.product_id,
				name_item: $scope.name_item,
				product_name: $scope.product_name,
				img: $scope.product_img_medium,
				price: res.data.variant[0].harga,
				category: res.data.category
			}
			historyProduct.splice(0, 0, product);
			localStorage.setItem('historyProduct', JSON.stringify(historyProduct));

			$scope.variant_ecer = [];
			$scope.variant_grosir = [];

			res.data.variant.map(function(val) {
				val.kelipatan = parseInt(val.kelipatan);
				if (val.kelipatan == '1') {
					$scope.variant_ecer.push(val)
				} else {
					$scope.variant_grosir.push(val)
				}
			});

			$scope.list_image = res.data.image_data;

			localStorage.setItem('vip_member', res.data.vip_member);
			$ionicSlideBoxDelegate.update();

			$timeout(function() {
				$scope.slideboxStyle = true;

			}, 500);

			for (var z = 0; z < res.data.image_data.length; z++) {
				array_image.push(res.data.image_data[z].foto);
			}
			for (var i = 0; i < $scope.list_variant.length; i++) {
				angular.element(document.querySelector('#qty_' + i)).val(' ');
			}
			$scope.optionVariant('Grosir');
		},
		function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.cari_produk = function() {
		$ionicHistory.clearCache().then(function() {
			productService.keyword = $scope.postDataSearch.pencarian;
			$state.go('eventmenu.dashboardSearch');
		});
	}

	$scope.detailBarang = function(id, category) {
		productService.category_name = category;
		productService.selectedProduct = id;
		page = 1;

		$state.go('eventmenu.detailbarang', {}, {reload: true});
	}

	$scope.optionVariant = function(val) {
		if (val == 'Ecer') {
			$scope.list_variant = $scope.variant_ecer;
			$scope.variant_option = $scope.variant_option == 'Ecer' ? '' : 'Ecer';
		} else {
			$scope.list_variant = $scope.variant_grosir;
			$scope.variant_option = $scope.variant_option == 'Grosir' ? '' : 'Grosir';
		}
	}

	$scope.showFull = function(index) {
		var list_image = [];
		$scope.list_image.map(function(img) {
			list_image.push(img.url);
		});
		$cordovaPhotoViewer.show(list_image, '', { share: true, index: index });
	}

	$scope.preview = function(source) {
		$scope.modal = $ionicModal.fromTemplate('<ion-modal-view>' +
			' <ion-header-bar class="bar warna_utama bar-header">' +
			'<h1 class = "title" style="color:white;">Detail Size Jeans</h1>' +
			'<button class="button button-clear button-primary" ng-click="modal.hide()">Close</button>' +
			'</ion-header-bar>' +

			'<ion-content>' +
			'<img src="' + source + '" width="100%">' +
			'</ion-content>' +

			'</ion-modal-view>', {
				scope: $scope,
				animation: 'slide-in-up'
			});
		$scope.modal.show();
	}

	$scope.changeSlider = function(index) {
		$scope.$broadcast('slideBox.setSlide', index);
	}

	$scope.getPersen = function(id) {
		$scope.diskon_persen = $scope.list_variant[id].diskon_persen;
	}

	$scope.contentProduct = 'templates/var.html';
	$scope.setTab = function(contentProduct) {
		if (contentProduct == 'desc') {
			$scope.contentProduct = 'templates/desc.html';
		} else if (contentProduct == 'var') {
			$scope.contentProduct = 'templates/var.html';
		}
	}

	$scope.submit_order = function() {
		var variant_id = [];
		var qty = [];

		if ($scope.contentProduct == 'templates/desc.html' || $scope.contentProduct == 'templates/size_jeans.html') {
			$scope.contentProduct = 'templates/var.html';

			$ionicPopup.alert({
				title: 'Alert',
				template: 'Piih variant & qty yg anda inginkan terlebih dahulu'
			});
		}
		if ($scope.list_variant.length > 0) {
			for (var i = 0; i < $scope.list_variant.length; i++) {
				var inputs1 = angular.element(document.querySelector('#qty_' + i));
				if (inputs1.val().length > 0) {
					variant_id.push($scope.list_variant[i].id_variant);
					qty.push(inputs1.val());
				}
			}
		}

		if (variant_id.length == 0) {
			$ionicPopup.alert({
				title: 'Alert',
				template: 'Piih variant & qty yg anda inginkan terlebih dahulu'
			});
		} else {
			if (!$scope.isLogin) {
				$state.go('eventmenu.login_inside');
			} else {
				$ionicLoading.show()
				var link = base_url + 'process_order_item';
				$http({
					method: 'POST',
					url: link,
					data: {
						customer_id: window.localStorage['customer_id'],
						token: token,
						prod_id: productService.selectedProduct,
						variant_id: variant_id,
						qty: qty,
						price: $scope.product_harga
					},
					timeout: 8000
				}).then(function(res) {
					$ionicLoading.hide();
					if (res.data.status == 'Success') {
						$ionicPopup.alert({
							title: 'Notifikasi',
							template:
							'<p style="margin: 0 0 0 0 !important;font-weight: bold;font-size: 7pt;line-height:12px;" align="center">Pesanan berhasil dibuat</p>' +
							'<p style="margin: 0 0 0 0 !important;font-weight: bold;font-size: 7pt;line-height:12px;">- Batas keep pesanan selama 3 hari</p>' +
							'<p style="margin: 0 0 0 0 !important;font-weight: bold;font-size: 7pt;line-height:12px;">- Min transfer jam 15.00 WIB perorder hari ini</p>' +
							'<p style="margin: 0 0 0 0 !important;font-weight: bold;font-size: 6pt;line-height:12px;">- Ekspedisi JNE,J&T,WAHANA,POS,TIKI,SICEPAT</p>' +
							'<p style="margin: 0 0 0 6px !important;font-weight: bold;font-size: 7pt;line-height:12px;">(Estimasi Pengiriman Hari Ini)</p>' +
							'<p style="margin: 0 0 0 0 !important;font-weight: bold;font-size: 7pt;line-height:12px;">- Ekspedisi Lainnya / Cargo</p>' +
							'<p style="margin: 0 0 0 6px !important;font-weight: bold;font-size: 7pt;line-height:12px;">(Estimasi Pengiriman Besok)</p>' +
							'<p style="margin: 0 0 0 0 !important;font-weight: bold;font-size: 7pt;line-height:12px;">- Hari Minggu Off</p>',
							buttons: [{
								text: 'Lanjut Berbelanja',
								type: 'button-positive',
								onTap: function() {
									$ionicHistory.goBack();
								}
							}, {
								text: 'Cek Daftar Pesanan Barang',
								type: 'button-positive',
								onTap: function() {
									$state.go('eventmenu.listpesananbarang', {}, {
										reload: true
									});
								},
							}]
						});
						get_detail_product();
					} else {
						$ionicPopup.alert({
							title: res.data.status,
							template: res.data.message,
						});
					}
				},
				function() {
					$ionicLoading.hide();
					alert('Failed to continue, please check your internet connection');
				});
			}
		}
	}

	$scope.actionSaveImage = function() {
		if (localStorage.getItem('customer_id') === undefined) {
			$state.go('eventmenu.login');
		} else {
			$ionicActionSheet.show({
				buttons: [{
					text: ionic.Platform.isAndroid() ? '<i class="icon ion-image"></i> Simpan Gambar' : 'Simpan Gambar'
				}, {
					text: ionic.Platform.isAndroid() ? '<i class="icon ion-images"></i> Simpan Semua Gambar' : 'Simpan Semua Gambar'
				}, {
					text: ionic.Platform.isAndroid() ? '<i class="icon ion-images"></i> Simpan Gambar Size' : 'Simpan Gambar Size'
				}],
				titleText: 'Pilih Simpan Gambar',
				cancelText: ionic.Platform.isAndroid() ? '<i class="icon ion-reply"></i> Batal' : 'Batal',
				cancel: function() {},
				buttonClicked: function(index) {
					if (index === 1) {
						var img = $scope.list_image;
						var i = 0;
						function saveImage() {
							$ionicLoading.show();
							setTimeout(function() {
								$scope.save_image(img[i].foto, i);
								i++;
								if (i < img.length) {
									saveImage();
								} else {
									$ionicLoading.hide();
								}
							}, 800)
						}
						saveImage();
					} else if (index === 0) {
						$scope.save_image(undefined, 0, 'current');
					} else {
						$scope.save_image($scope.src_size_jeans, 0, 'size_jeans');
					}
					return true;
				}
			});
		}
	}

	$scope.save_image = function(url_file, i, type) {
		if (type == 'size_jeans') {
			$scope.img_url = url_file;
		} else {
			if (url_file === undefined) {
				$scope.img_url = base_url_media + '/images/large/' + array_image[$ionicSlideBoxDelegate.currentIndex()];
			} else {
				$scope.img_url = base_url_media + '/images/large/' + url_file;
			}
		}

		cordova.plugins.diagnostic.requestRuntimePermission(function(status) {
			switch (status) {
				case cordova.plugins.diagnostic.permissionStatus.GRANTED:
				break;
				case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
				break;
				case cordova.plugins.diagnostic.permissionStatus.DENIED:
				break;
				case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
				break;
			}
		}, function() {
		}, cordova.plugins.diagnostic.runtimePermission.WRITE_EXTERNAL_STORAGE);
		cordova.plugins.diagnostic.registerPermissionRequestCompleteHandler(successCallback(i, type));
	}

	function successCallback(i, type) {
		download_lagi2($scope.img_url, i, type);
	}

	function download_lagi2(url, i, type) {
		$ionicLoading.show()
		setTimeout(function() {
			var success = function() {
				var img_length = $scope.list_image.length - 1;
				if (i === img_length || type == 'size_jeans' || type == 'current') {
					alert('Image Successfully Downloaded');
					$ionicLoading.hide();
				}
			};

			var error = function(err) {
				alert('message: ' + err);
				$ionicLoading.hide();
			};

			saveImageToPhone(url, success, error);
		}, 3000);
	}

	function saveImageToPhone(url, success, error) {
		var canvas, context, imageDataUrl, imageData;
		var img = new Image();
		img.onload = function() {
			canvas = document.createElement('canvas');
			canvas.width = img.width;
			canvas.height = img.height;
			context = canvas.getContext('2d');
			context.drawImage(img, 0, 0);
			try {
				imageDataUrl = canvas.toDataURL('image/jpeg', 1.0);
				imageData = imageDataUrl.replace(/data:image\/jpeg;base64,/, '');
				cordova.exec(
					success,
					error,
					'Canvas2ImagePlugin',
					'saveImageDataToLibrary', [imageData, url]
					);
			} catch (e) {
				error(e.message);
			}
		};
		try {
			img.src = url;
		} catch (e) {
			error('ero saveImageToPhone' + e.message);
		}
	}

	$scope.share = function() {
		var image = [];
		for (var i = 0; i < $scope.list_image.length; i++) {
			image.push($scope.list_image[i].url);
		}
		$cordovaSocialSharing.share(
			null,
			$scope.product_name,
			image,
			null,
			function() {
			},
			function(errorMsg) {
				alert('Error: Cannot Share : '+ errorMsg)
			}
			);
	}

	$scope.successCopy = function(e) {
		e.clearSelection();
		ionicToast.show('Deskripsi berhasil disalin', 'bottom', false, 3000);
	}
})
.controller('listpesananbarangController', function($scope, $state, $rootScope, $http, $ionicLoading, $ionicPopup, listPesananService, $window, $ionicHistory) {
	$scope.postData = {};
	$scope.checkedOrder = [];
	$scope.checkItems = {}
	$scope.failed_agen_price = false;
	$scope.customer_type = localStorage.getItem('customer_type');

	var customer_id = localStorage.getItem('customer_id');
	if (customer_id === undefined) {
		$state.go('eventmenu.login_inside');
	}

	$scope.cancelOrder = function(order_item_id) {
		var confirmPopup = $ionicPopup.confirm({
			title: 'Konfirmasi',
			template: 'Hapus Pesanan ?'
		});

		confirmPopup.then(function(res) {
			if (res) {
				$ionicLoading.show();
				var link = base_url + 'cancel_order_item';
				$http({
					method: 'POST',
					url: link,
					data: {
						customer_id: window.localStorage['customer_id'],
						token: token,
						order_item_id: order_item_id,
					},
					timeout: 8000
				}).then(function(response) {
					$ionicLoading.hide();
					$ionicPopup.alert({
						title: 'Notifikasi',
						template: 'Pesanan berhasil dibatalkan',
						buttons: [{
							text: 'OK',
							type: 'button-positive',
							onTap: function() {
									// $window.location.reload(true);
									list_order();
									getCartTotal();
									$scope.failed_agen_price = response.data.failed_agen_price;
								}
							}]
						});
				},
				function() {
					$ionicLoading.hide();
					alert('Failed to continue, please check your internet connection');
				});
			}
		});
	}

	$scope.toDashboard = function() {
		$ionicHistory.clearCache().then(function() {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$scope.back = false;
			$state.go('eventmenu.dashboard');
		});
	}

	list_order();

	function list_order() {
		$ionicLoading.show();
		var link = base_url + 'list_order';
		$http({
			method: 'POST',
			url: link,
			data: {
				customer_id: window.localStorage['customer_id'],
				token: token
			},
			timeout: 8000
		}).then(function(res) {
			$ionicLoading.hide();
			$scope.list_order = res.data.order;
			$scope.total_amount = res.data.total_amount;
			$scope.total_qty = res.data.total_qty;
			$scope.total_weight = res.data.total_weight;
			$scope.total_item_produk = res.data.total_item_produk;
			$scope.satuan_berat = $window.localStorage['satuan_berat'];

			$scope.tipe_customer = res.data.status_harga_customer;
			localStorage.setItem('customer_type', $scope.tipe_customer);

			if (res.data.total_qty == 0) {
				$ionicPopup.alert({
					title: 'Alert',
					template: 'No Data'
				});
			} else {
				res.data.order.map(function(val) {
					$scope.checkedOrder.push({
						id: val.order_item_id,
						name: val.name_item,
						variant: val.variant,
						qty: val.qty,
						weight: val.weight,
						price: val.price,
						subtotal: val.subtotal,
						item_per_produk: val.item_per_produk
					});
				});
			}
		},
		function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	getCartTotal();

	function getCartTotal() {
		var url = base_url + 'get_cart_total';
		$http({
			method: 'POST',
			url: url,
			data: {
				customer_id: window.localStorage['customer_id'],
				token: token
			},
			timeout: 10000
		}).then(function(res) {
			/* check */
			if (res.data.status == 'Invalid Token') {
				check_token();
			}
			if (res.data.status == 'OFF') {
				check_status_aplikasi(res.data.message);
			}
			if (res.data.status == 'Member Not Found') {
				check_status_member_not_found();
			}
			if (res.data.status == 'Member Not Active') {
				check_status_member();
			}
			message_notif = res.data.status;
			/* end check */

			$rootScope.total_cart = res.data.total_cart;
			$rootScope.total_chat = res.data.total_chat;
			$rootScope.wishlist = res.data.wishlist;
			$rootScope.total_msg = res.data.total_msg;
			$rootScope.total_order_unpaid = res.data.total_order_unpaid;
		},
		function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.dropship1 = function() {
		if ($scope.checkedOrder.length >= 1) {
			listPesananService.checkedOrder = $scope.checkedOrder;
			$state.go('eventmenu.dropship1');
		} else {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Silahkan Pilih Pesanan Terlebih Dahulu'
			});
		}
	}

	$scope.dropship2 = function() {
		if ($scope.checkedOrder.length >= 1) {
			listPesananService.checkedOrder = $scope.checkedOrder;
			$state.go('eventmenu.dropship2');
		} else {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Silahkan Pilih Pesanan Terlebih Dahulu'
			});
		}
	}

	$scope.titipToko = function() {
		listPesananService.checkedOrder = $scope.checkedOrder;
		$state.go('eventmenu.titipToko');
	}
})
.controller('kirimAlamatSendiriController', function($scope, $state, $http, $ionicLoading, listPesananService, $window, $ionicPopup, $timeout, $ionicHistory, dataPesananService, $rootScope) {
	$scope.postData = {};

	$scope.arr_prov = [];
	$scope.arr_kota = [];
	$scope.arr_kecamatan = [];
	$scope.arr_ekspedisi = [];
	$scope.listPesananService = listPesananService;
	$scope.checkedOrder = listPesananService.checkedOrder;

	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];

	$scope.total_all = 0;
	$scope.ongkir = 0;
	$scope.free_ongkirr = false;
	var prov_id;
	var kec_id;

	var total_amount = 0;
	var total_qty = 0;
	var total_weight = 0;
	var total_item_per_produk = 0;
	var array = $scope.checkedOrder;
	var length_arr = array.length;


	for (var x = 0; x < length_arr; x++) {
		total_amount += parseFloat(array[x].subtotal.split('.').join(''));
		total_qty += parseFloat(array[x].qty);
		total_weight += parseFloat(array[x].weight);
		total_item_per_produk += parseFloat(array[x].item_per_produk);
	}

	$scope.total_amount = toRp(total_amount);
	$scope.total_qty = total_qty;
	$scope.total_item_produk = total_item_per_produk;
	$scope.total_weight = total_weight.toFixed(2);

	$ionicLoading.show();
	var link = base_url + 'get_customer_info';
	$http({
		method: 'POST',
		url: link,
		data: {
			customer_id: window.localStorage['customer_id'],
			token: token
		},
		timeout: 15000
	}).then(function(res) {
		prov_id = res.data.prov_id;
		kec_id = res.data.kecamatan_id;

		$scope.arr_prov.push({
			provinsi_id: res.data.prov_id,
			provinsi: res.data.prov
		});
		$scope.arr_kota.push({
			kota_id: res.data.kota_id,
			kota: res.data.kota
		});
		$scope.arr_kecamatan.push({
			kecamatan_id: res.data.kecamatan_id,
			kecamatan: res.data.kecamatan
		});

		$scope.provinsi = res.data.prov;
		$scope.kota = res.data.kota;
		$scope.kecamatan = res.data.kecamatan;
		$scope.dari = res.data.shop_name + ' ' + res.data.phone_admin;
		$scope.kepada = res.data.name;
		$scope.alamat = res.data.address;
		$scope.kodepos = res.data.postcode;
		$scope.telepon = res.data.phone;

		$scope.postData.dari = res.data.shop_name + ' ' + res.data.phone_admin;
		$scope.postData.kepada = res.data.name;
		$scope.postData.alamat = res.data.address;
		$scope.postData.kodepos = res.data.postcode;
		$scope.postData.telepon = res.data.phone;
		$scope.postData.prov_id = res.data.prov_id;
		$scope.postData.provinsi = res.data.provinsi;
		$scope.postData.kota = res.data.kota_id;
		$scope.postData.kecamatan = res.data.kecamatan_id;
	},
	function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	var link_content = base_url + 'get_content';
	$http({
		method: 'POST',
		url: link_content,
		data: {
			customer_id: window.localStorage['customer_id'],
			token: token
		},
		timeout: 15000
	}).then(function(res) {

		var json = res.data;

		$window.localStorage['origin_city_id'] = json[19].value;
		$window.localStorage['origin_city_name'] = json[24].value;
		$window.localStorage['satuan_berat'] = json[25].value;

		if (json[20].value == 'available') {
			$scope.arr_ekspedisi.push({
				'code': 'jne'
			});
		}
		if (json[21].value == 'available') {
			$scope.arr_ekspedisi.push({
				'code': 'tiki'
			});
		}
		if (json[22].value == 'available') {
			$scope.arr_ekspedisi.push({
				'code': 'pos'
			});
		}
		if (json[23].value == 'available') {
			$scope.arr_ekspedisi.push({
				'code': 'wahana'
			});
		}
		if (json[51].value == 'available') {
			$scope.arr_ekspedisi.push({
				'code': 'jnt'
			});
		}
		if (json[52].value == 'available') {
			$scope.arr_ekspedisi.push({
				'code': 'sicepat'
			});
		}

		$scope.satuan_berat = $window.localStorage['satuan_berat'];
		$ionicLoading.hide()
	},
	function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.potongan = undefined;
	$scope.message = undefined;
	$scope.free_ongkir = false;

	$scope.showPotongan = function($event) {
		var check = $event.target;
		if (!check.checked) {
			$scope.potongan = undefined;
			$scope.message = undefined;
			$scope.free_ongkir = false;
			var subtotal = $scope.total_amount.replace(/\./g, '');

			var ongkir = $scope.ongkir;
			if (ongkir != 0) {
				ongkir = ongkir.replace(/\./g, '');
			} else {
				ongkir = 0;
			}
			$scope.total_all = toRp(parseInt(subtotal) + parseInt(ongkir));
		}
	}

	$scope.checkVoucher = function(kode_voucher) {
		var subtotal = $scope.total_amount.replace(/\./g, '');

		var ongkir = $scope.ongkir;
		if (ongkir != 0) {
			ongkir = ongkir.replace(/\./g, '');
		} else {
			ongkir = 0;
		}
		$scope.total_all = toRp(parseInt(subtotal) + parseInt(ongkir));
		$ionicLoading.show();
		var link = base_url + 'cek_kode_voucher';
		$http({
			method: 'POST',
			url: link,
			data: {
				token: token,
				customer_id: window.localStorage['customer_id'],
				kode_voucher: kode_voucher,
				customer_type: window.localStorage['customer_type'],
				qty: total_item_per_produk,
			},
			timeout: 8000
		}).then(function(res) {
			$ionicLoading.hide();
			if (res.data.status == 'Success') {
				$scope.message = res.data.message;
				$scope.status_msg = {
					color: '#444'
				};
				var subtotal = $scope.total_amount.replace(/\./g, '');
				var ongkir = $scope.ongkir;
				if (ongkir != 0) {
					ongkir = ongkir.replace(/\./g, '');
				} else {
					ongkir = 0;
				}
				var potongan = 0;
				$scope.free_ongkir = true;

				if (res.data.jenis_voucher == 'Potongan') {
					potongan = res.data.value;
					$scope.potongan = toRp(potongan);
					$scope.free_ongkir = false;
				} else if (res.data.jenis_voucher == 'Diskon') {
					var diskon = parseFloat(res.data.value);
					diskon = (parseFloat(subtotal) * diskon) / 100;
					$scope.potongan = toRp(diskon);
					potongan = diskon;
					$scope.free_ongkir = false;
				}
				$scope.total_all = toRp(parseInt(subtotal) + parseInt(ongkir) - parseInt(potongan));
			} else {
				$scope.message = res.data.message;
				$scope.status_msg = {
					color: 'red'
				};
			}
		},
		function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.getTarif = function(val) {
		$scope.listTarif = [];
		$ionicLoading.show();

		if (val == 'lainnya') {
			var link = base_url + 'ekspedisi_lain';
			$http({
				method: 'POST',
				url: link,
				data: {
					customer_id: window.localStorage['customer_id'],
					token: token
				},
				timeout: 8000
			}).then(function(res) {
				$ionicLoading.hide();
				res.data.map(function(val) {
					$scope.listTarif.push({
						service: val.name,
						cost: [{
							value: 0
						}]
					});
				});
			},
			function() {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		} else {
			var param = '?token=' + token_api + '&domain=' + domain_api + '&origin_city_id=' + $window.localStorage['origin_city_id'] + '&destination_id=' + kec_id + '&destination_type=subdistrict&weight=' + total_weight + '&satuan=' + $window.localStorage['satuan_berat'] + '&courier=' + val;
			var link_cost = base_url_api + '/cost' + param;
			$http({
				method: 'POST',
				url: link_cost,
				data: {
					customer_id: window.localStorage['customer_id'],
					token: token
				},
				timeout: 8000
			}).then(function(res) {
				$ionicLoading.hide();
				$scope.listTarif = res.data.result[0].costs;
			},
			function() {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		}
	}

	$scope.setOngkir = function(val) {
		val = val.split('#');
		$scope.ongkir = toRp(val[0]);
		var subtotal = $scope.total_amount.split('.').join('');
		var ongkir = val[0].split('.').join('');
		$scope.tarif_tipe = val[1];
		if ($scope.potongan != undefined) {
			var potongan = $scope.potongan.split('.').join('');
			$scope.total_all = toRp(parseInt(subtotal) + parseInt(ongkir) - parseInt(potongan));
		} else {
			if ($scope.free_ongkir == false) {
				$scope.total_all = toRp(parseInt(subtotal) + parseInt(ongkir));
			} else {
				$scope.total_all = toRp(subtotal);
				$scope.ongkir = 0;
			}
		}
	}

	$scope.process_dropship1 = function() {
		var dari = $scope.postData.dari;
		var kepada = $scope.postData.kepada;
		var alamat = $scope.postData.alamat;
		var kota = $scope.postData.kota;
		var kecamatan = $scope.postData.kecamatan;
		var ekspedisi = $scope.postData.ekspedisi;
		var tarif = $scope.postData.tarif;
		var kodepos = $scope.postData.kodepos;
		var telepon = $scope.postData.telepon;

		var potongan = 0;
		var kode_voucher = '';

		var list_dropship = new Array();
		angular.forEach($scope.checkedOrder, function(value) {
			list_dropship.push(value.id);
		})


		function dropship() {
			$ionicLoading.show();
			if ($scope.potongan != undefined) {
				potongan = $scope.potongan.replace('.', '').trim();
				kode_voucher = $scope.postData.kode_voucher;
			} else if ($scope.free_ongkir) {
				kode_voucher = $scope.postData.kode_voucher;
			}
			var link = base_url + 'process_dropship';
			$http({
				method: 'POST',
				url: link,
				data: {
					customer_id: $window.localStorage['customer_id'],
					from: dari,
					to: kepada,
					provinsi: $scope.provinsi,
					kota: $scope.kota,
					kecamatan: $scope.kecamatan,
					address_recipient: alamat,
					phone_recipient: telepon,
					postal_code: kodepos,
					ongkir: $scope.ongkir,
					potongan: potongan,
					kode_voucher: kode_voucher,
					total: $scope.total_all,
					weight: $scope.total_weight,
					order_item_id: list_dropship,
					ekspedisi: ekspedisi,
					tarif_tipe: $scope.tarif_tipe,
					fee_kg: '',
					origin_city_id: $window.localStorage['origin_city_id'],
					prov_id: prov_id,
					kota_id: kota,
					kecamatan_id: kecamatan,
					token: token
				},
				timeout: 8000
			}).then(function(res) {
				$ionicLoading.hide();

				var message = 'Lakukanlah Pembayaran dan Dilanjutkan Dengan Konfirmasi Pembayaran';

				if (ekspedisi === 'lainnya') {
					message = '<p align="center" style="font-size: 10pt;font-weight: bold;line-height: 0px;">Silahkan chatting admin</p><p align="center" style="font-size: 10pt;font-weight: bold;line-height: 14px;">apakah untuk pengirimannya</p><p align="center" style="font-size: 10pt;font-weight: bold;line-height: 0px;">bayar tujuan atau bayar disini</p>';
				}

				$ionicPopup.alert({
					title: 'Notifikasi',
					template: message,
					buttons: [{
						text: 'OK',
						type: 'button-default',
						onTap: function() {
							$rootScope.total_order_unpaid = res.data.total_order_unpaid;
							$rootScope.total_cart = res.data.total_cart;
							dataPesananService.selectedPesananID = res.data.order_id;
							$ionicHistory.clearCache().then(function() {
								$ionicHistory.nextViewOptions({
									disableBack: true
								});
								$state.go('eventmenu.listdatadetailpesanan');
							});
						}
					}]
				});
			},
			function() {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		}

		if (ekspedisi == null) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Ekspedisi Tidak Boleh kosong'
			});
		} else if (tarif == null) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Tarif Tidak Boleh kosong'
			});
		} else if (ekspedisi === 'lainnya') {
			var confirmPopup = $ionicPopup.confirm({
				title: 'Notifikasi',
				template: '<p align="center">Tarif yang anda pilih membutuhkan perhitungan ongkir dari admin</p>'
			});
			confirmPopup.then(function(res) {
				if (res) {
					dropship();
				}
			});
		} else {
			dropship();
		}
	}
})
.controller('kirimAlamatLainController', function($scope, $state, $http, $ionicLoading, listPesananService, $window, $ionicPopup, $timeout, $ionicHistory, dataPesananService, $rootScope) {
	$scope.postData = {};

	$scope.arr_prov = [];
	$scope.arr_kota = [];
	$scope.arr_kecamatan = [];
	$scope.arr_ekspedisi = [];
	$scope.listPesananService = listPesananService;
	$scope.checkedOrder = listPesananService.checkedOrder;
	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];

	$scope.free_ongkir = false;
	$scope.total_all = 0;
	$scope.ongkir = 0;

	var prov_id;
	var kota_id;
	var kec_id;

	var total_amount = 0;
	var total_qty = 0;
	var total_weight = 0;
	var total_item_per_produk = 0;
	var array = $scope.checkedOrder;
	var length_arr = array.length;


	for (var x = 0; x < length_arr; x++) {
		total_amount += parseFloat(array[x].subtotal.split('.').join(''));
		total_qty += parseFloat(array[x].qty);
		total_weight += parseFloat(array[x].weight);
		total_item_per_produk += parseFloat(array[x].item_per_produk);
	}

	$scope.total_amount = toRp(total_amount);
	$scope.total_qty = total_qty;
	$scope.total_item_produk = total_item_per_produk;
	$scope.total_weight = total_weight.toFixed(2);

	$ionicLoading.show()
	var param = '?token=' + token_api + '&domain=' + domain_api;
	var link = base_url_api + '/province' + param;
	$http({
		method: 'POST',
		url: link,
		data: {},
		timeout: 8000
	}).then(
	function(res) {
		$scope.list_provinsi = res.data.result;
		$scope.ListProvinsi = true;
	},
	function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});


	$scope.getKota = function(val) {
		val = val.split('#');
		prov_id = val[0];
		$scope.provinsi = val[1];

		$ionicLoading.show()
		var param = '?token=' + token_api + '&domain=' + domain_api + '&province_id=' + val;
		var link = base_url_api + '/city' + param;

		$http({
			method: 'POST',
			url: link,
			data: {},
			timeout: 8000
		}).then(function(res) {
			$scope.city_name = '-Pilih kota-';
			$scope.city_id = '0';
			$scope.ListKota = true;

			$ionicLoading.hide()
			$scope.list_kota = res.data.result;
		},
		function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}


	$scope.getKecamatan = function(val) {
		val = val.split('#');
		kota_id = val[0];
		$scope.kota = val[1];

		$ionicLoading.show()
		var param = '?token=' + token_api + '&domain=' + domain_api + '&city_id=' + $scope.postData.kota;
		var link = base_url_api + '/subdistrict' + param;
		$http({
			method: 'POST',
			url: link,
			data: {},
			timeout: 8000
		}).then(
		function(res) {
			$ionicLoading.hide()

			$scope.kecamatan = '-Pilih Kecamatan-';
			$scope.kecamatan_id = '0';
			$scope.ListKecamatan = true;

			$scope.list_kecamatan = res.data.result;
		},
		function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	var link_content = base_url + 'get_content';
	$http({
		method: 'POST',
		url: link_content,
		data: {
			customer_id: window.localStorage['customer_id'],
			token: token
		},
		timeout: 8000
	}).then(function(res) {

		var json = res.data;

		$window.localStorage['origin_city_id'] = json[19].value;
		$window.localStorage['origin_city_name'] = json[24].value;
		$window.localStorage['satuan_berat'] = json[25].value;

		if (json[20].value == 'available') {
			$scope.arr_ekspedisi.push({
				'code': 'jne'
			});
		}
		if (json[21].value == 'available') {
			$scope.arr_ekspedisi.push({
				'code': 'tiki'
			});
		}
		if (json[22].value == 'available') {
			$scope.arr_ekspedisi.push({
				'code': 'pos'
			});
		}
		if (json[23].value == 'available') {
			$scope.arr_ekspedisi.push({
				'code': 'wahana'
			});
		}

		if (json[51].value == 'available') {
			$scope.arr_ekspedisi.push({
				'code': 'jnt'
			});
		}
		if (json[52].value == 'available') {
			$scope.arr_ekspedisi.push({
				'code': 'sicepat'
			});
		}

		$scope.satuan_berat = $window.localStorage['satuan_berat'];
		$ionicLoading.hide();
	},
	function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.setKecamatan = function(val) {
		val = val.split('#');
		kec_id = val[0];
		$scope.kecamatan = val[1];
	}

	$scope.getTarif = function(val) {
		$scope.listTarif = [];
		$ionicLoading.show();

		if (val == 'lainnya') {
			var link = base_url + 'ekspedisi_lain';
			$http({
				method: 'POST',
				url: link,
				data: {
					customer_id: window.localStorage['customer_id'],
					token: token
				},
				timeout: 8000
			}).then(function(res) {
				$ionicLoading.hide();
				res.data.map(function(val) {
					$scope.listTarif.push({
						service: val.name,
						cost: [{
							value: 0
						}]
					});
				});
			},
			function() {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		} else {
			var param = '?token=' + token_api + '&domain=' + domain_api + '&origin_city_id=' + $window.localStorage['origin_city_id'] + '&destination_id=' + kec_id + '&destination_type=subdistrict&weight=' + total_weight + '&satuan=' + $window.localStorage['satuan_berat'] + '&courier=' + val;
			var link_cost = base_url_api + '/cost' + param;
			$http({
				method: 'POST',
				url: link_cost,
				data: {
					customer_id: window.localStorage['customer_id'],
					token: token
				},
				timeout: 8000
			}).then(function(res) {
				$ionicLoading.hide();
				$scope.listTarif = res.data.result[0].costs;
			},
			function() {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		}
	}

	$scope.potongan = undefined;
	$scope.message = undefined;
	$scope.free_ongkir = false;

	$scope.showPotongan = function($event) {
		var check = $event.target;
		if (!check.checked) {
			$scope.potongan = undefined;
			$scope.message = undefined;
			var subtotal = $scope.total_amount.replace(/\./g, '');
			var ongkir = $scope.ongkir;
			if (ongkir != 0) {
				ongkir = ongkir.replace(/\./g, '');
			} else {
				ongkir = 0;
			}
			$scope.total_all = toRp(parseInt(subtotal) + parseInt(ongkir));
		}
	}

	$scope.checkVoucher = function(kode_voucher) {
		$scope.potongan = undefined;
		$scope.message = undefined;
		$scope.free_ongkir = false;
		var subtotal = $scope.total_amount.replace(/\./g, '');

		var ongkir = $scope.ongkir;
		if (ongkir != 0) {
			ongkir = ongkir.replace(/\./g, '');
		} else {
			ongkir = 0;
		}
		$scope.total_all = toRp(parseInt(subtotal) + parseInt(ongkir));

		$ionicLoading.show();
		var link = base_url + 'cek_kode_voucher';
		$http({
			method: 'POST',
			url: link,
			data: {
				token: token,
				customer_id: window.localStorage['customer_id'],
				kode_voucher: kode_voucher,
				customer_type: window.localStorage['customer_type'],
				qty: total_item_per_produk,
			},
			timeout: 8000
		}).then(
		function(res) {
			$ionicLoading.hide();
			if (res.data.status == 'Success') {
				$scope.message = res.data.message;
				$scope.status_msg = {
					color: '#444'
				};
				var subtotal = $scope.total_amount.replace(/\./g, '');
				var ongkir = $scope.ongkir;
				var potongan = 0;
				$scope.free_ongkir = true;
				if (ongkir != 0) {
					ongkir = ongkir.replace(/\./g, '');
				} else {
					ongkir = 0;
				}
				if (res.data.jenis_voucher == 'Potongan') {
					potongan = res.data.value;
					$scope.potongan = toRp(potongan);
					$scope.free_ongkir = false;
				} else if (res.data.jenis_voucher == 'Diskon') {
					var diskon = parseFloat(res.data.value);
					diskon = (parseFloat(subtotal) * diskon) / 100;
					$scope.potongan = toRp(diskon);
					potongan = diskon;
					$scope.free_ongkir = false;
				}
				$scope.total_all = toRp(parseInt(subtotal) + parseInt(ongkir) - parseInt(potongan));
			} else {
				$scope.message = res.data.message;
				$scope.status_msg = {
					color: 'red'
				};
			}
		},
		function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.setOngkir = function(val) {
		val = val.split('#');
		$scope.ongkir = toRp(val[0]);
		var subtotal = $scope.total_amount.split('.').join('');
		var ongkir = val[0].split('.').join('');
		$scope.tarif_tipe = val[1];
		if ($scope.potongan != undefined) {
			var potongan = $scope.potongan.split('.').join('');
			$scope.total_all = toRp(parseInt(subtotal) + parseInt(ongkir) - parseInt(potongan));
		} else {
			if ($scope.free_ongkir == false) {
				$scope.total_all = toRp(parseInt(subtotal) + parseInt(ongkir));
			} else {
				$scope.total_all = toRp(subtotal);
				$scope.ongkir = 0;
			}
		}
	}

	$scope.process_dropship1 = function() {
		var dari = $scope.postData.dari;
		var kepada = $scope.postData.kepada;
		var alamat = $scope.postData.alamat;
		var provinsi = $scope.postData.provinsi;
		var kota = $scope.postData.kota;
		var kecamatan = $scope.postData.kecamatan;
		var ekspedisi = $scope.postData.ekspedisi;
		var tarif = $scope.postData.tarif;
		var kodepos = $scope.postData.kodepos;
		var telepon = $scope.postData.telepon;

		var list_dropship = new Array();
		angular.forEach($scope.checkedOrder, function(value) {
			list_dropship.push(value.id);
		});

		var potongan = 0;
		var kode_voucher = '';

		if (ekspedisi == null) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Ekspedisi Tidak Boleh kosong'
			});
		} else if (dari == null) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Dari Tidak Boleh kosong'
			});
		} else if (kepada == null) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Kepada Tidak Boleh kosong'
			});
		} else if (alamat == null) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Alamat Tidak Boleh kosong'
			});
		} else if (provinsi == null) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Provinsi Tidak Boleh kosong'
			});
		} else if (kota == null) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Kota Tidak Boleh kosong'
			});
		} else if (kecamatan == null) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Kecamatan Tidak Boleh kosong'
			});
		} else if (tarif == null) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Tarif Tidak Boleh kosong'
			});
		} else if (kodepos == null) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Kodepos Tidak Boleh kosong'
			});
		} else if (telepon == null) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Telepon Penerima Tidak Boleh kosong'
			});
		} else if (ekspedisi === 'lainnya') {
			$ionicPopup.confirm({
				title: 'Notifikasi',
				template: '<p align="center">Tarif yang anda pilih membutuhkan perhitungan ongkir dari admin</p>'
			});
		} else {
			$ionicLoading.show();
			if ($scope.potongan != undefined) {
				potongan = $scope.potongan.replace('.', '').trim();
				kode_voucher = $scope.postData.kode_voucher;
			} else if ($scope.free_ongkir) {
				kode_voucher = $scope.postData.kode_voucher;
			}
			var link = base_url + 'process_dropship';
			$http({
				method: 'POST',
				url: link,
				data: {
					customer_id: $window.localStorage['customer_id'],
					from: dari,
					to: kepada,
					address_recipient: alamat,
					phone_recipient: telepon,
					postal_code: kodepos,
					ongkir: $scope.ongkir,
					total: $scope.total_all,
					weight: $scope.total_weight,
					order_item_id: list_dropship,
					ekspedisi: ekspedisi,
					tarif_tipe: $scope.tarif_tipe,
					potongan: potongan,
					kode_voucher: kode_voucher,
					fee_kg: '',
					origin_city_id: $window.localStorage['origin_city_id'],
					provinsi: $scope.provinsi,
					kota: $scope.kota,
					kecamatan: $scope.kecamatan,
					prov_id: prov_id,
					kota_id: kota_id,
					kecamatan_id: kec_id,
					token: token
				},
				timeout: 8000
			}).then(
			function(res) {
				$ionicLoading.hide();

				var message = 'Lakukanlah Pembayaran dan Dilanjutkan Dengan Konfirmasi Pembayaran';

				if (ekspedisi === 'lainnya') {
					message = '<p align="center">Silahkan chatting admin apakah untuk pengirimannya bayar tujuan atau bayar disini</p>';
				}

				$ionicPopup.alert({
					title: 'Notifikasi',
					template: message,
					buttons: [{
						text: 'OK',
						type: 'button-default',
						onTap: function() {
							$rootScope.total_order_unpaid = res.data.total_order_unpaid;
							$rootScope.total_cart = res.data.total_cart;
							dataPesananService.selectedPesananID = res.data.order_id;
							$ionicHistory.clearCache().then(function() {
								$ionicHistory.nextViewOptions({
									disableBack: true
								});
								$state.go('eventmenu.listdatadetailpesanan');
							});
						}
					}]
				});
			},
			function() {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		}
	}
})
.controller('titipTokoController', function($scope, $state, $http, $ionicLoading, listPesananService, $window, $ionicPopup, dataPesananService, $rootScope, $ionicHistory) {
	$scope.postData = {};

	$scope.listPesananService = listPesananService;
	$scope.checkedOrder = listPesananService.checkedOrder;
	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];

	var total_amount = 0;
	var total_qty = 0;
	var total_weight = 0;
	var total_item_per_produk = 0;
	var array = $scope.checkedOrder;
	var length_arr = array.length;

	for (var x = 0; x < length_arr; x++) {
		total_amount += parseFloat(array[x].subtotal.split('.').join(''));
		total_qty += parseFloat(array[x].qty);
		total_weight += parseFloat(array[x].weight);
		total_item_per_produk += parseFloat(array[x].item_per_produk);
	}

	$scope.free_ongkir = false;
	$scope.total_all = 0;
	$scope.ongkir = 0;

	$scope.total_amount = toRp(total_amount);
	$scope.total_qty = total_qty;
	$scope.total_item_produk = total_item_per_produk;
	$scope.total_weight = total_weight.toFixed(2);

	$scope.potongan = undefined;
	$scope.message = undefined;
	$scope.free_ongkir = false;

	$scope.showPotongan = function($event) {
		var check = $event.target;
		if (!check.checked) {
			$scope.potongan = undefined;
			$scope.message = undefined;
			var subtotal = $scope.total_amount.replace(/\./g, '');
			var ongkir = $scope.ongkir;
			if (ongkir != 0) {
				ongkir = ongkir.replace(/\./g, '');
			} else {
				ongkir = 0;
			}
			$scope.total_all = toRp(parseInt(subtotal) + parseInt(ongkir));
		}
	}

	$scope.checkVoucher = function(kode_voucher) {
		$scope.potongan = undefined;
		$scope.message = undefined;
		$scope.free_ongkir = false;
		var subtotal = $scope.total_amount.replace(/\./g, '');

		var ongkir = $scope.ongkir;
		if (ongkir != 0) {
			ongkir = ongkir.replace(/\./g, '');
		} else {
			ongkir = 0;
		}
		$scope.total_all = toRp(parseInt(subtotal) + parseInt(ongkir));

		$ionicLoading.show();
		var link = base_url + 'cek_kode_voucher';
		$http({
			method: 'POST',
			url: link,
			data: {
				token: token,
				customer_id: window.localStorage['customer_id'],
				kode_voucher: kode_voucher,
				customer_type: window.localStorage['customer_type'],
				qty: total_item_per_produk,
			},
			timeout: 8000
		}).then(function(res) {
			$ionicLoading.hide();
			if (res.data.status == 'Success') {
				$scope.message = res.data.message;
				$scope.status_msg = {
					color: '#444'
				};
				var subtotal = $scope.total_amount.replace(/\./g, '');
				var ongkir = $scope.ongkir;

				var potongan = 0;
				$scope.free_ongkir = true;

				if (ongkir != 0) {
					ongkir = ongkir.replace(/\./g, '');
				} else {
					ongkir = 0;
				}
				if (res.data.jenis_voucher == 'Potongan') {
					potongan = res.data.value;
					$scope.potongan = toRp(potongan);
					$scope.free_ongkir = false;
				} else if (res.data.jenis_voucher == 'Diskon') {
					var diskon = parseFloat(res.data.value);
					diskon = (parseFloat(subtotal) * diskon) / 100;
					$scope.potongan = toRp(diskon);
					potongan = diskon;
					$scope.free_ongkir = false;
				}
				$scope.total_all = toRp(parseInt(subtotal) + parseInt(ongkir) - parseInt(potongan));
			} else {
				$scope.message = res.data.message;
				$scope.status_msg = {
					color: 'red'
				};
			}
		},
		function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.processTitipToko = function() {
		var dari = $scope.postData.dari;
		var nama_toko = $scope.postData.nama_toko;
		var alamat = $scope.postData.alamat;
		var telepon = $scope.postData.telepon;
		var kode_voucher = '';
		var potongan = 0;
		if (dari == null || dari == '') {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Dari Tidak Boleh kosong'
			});
		} else if (nama_toko == null || nama_toko == '') {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Nama Toko Tidak Boleh kosong'
			});
		} else if (alamat == null || alamat == '') {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Alamat Toko Tidak Boleh kosong'
			});
		} else if (telepon == null || telepon == '') {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Telepon Toko Tidak Boleh kosong'
			});
		} else {
			if ($scope.potongan != undefined) {
				potongan = $scope.potongan.replace('.', '').trim();
				kode_voucher = $scope.postData.kode_voucher;
			} else if ($scope.free_ongkir) {
				kode_voucher = $scope.postData.kode_voucher;
			}

			var list_order = [];
			$scope.checkedOrder.map(function(val) {
				list_order.push(val.id);
			});
			$ionicLoading.show();
			var url = base_url + 'titip_toko';
			$http({
				method: 'POST',
				url: url,
				data: {
					customer_id: window.localStorage['customer_id'],
					token: token,
					order_item_id: list_order,
					dari: dari,
					nama_toko: nama_toko,
					alamat_toko: alamat,
					telepon_toko: telepon,
					potongan: potongan,
					kode_voucher: kode_voucher,
				},
				timeout: 10000
			}).then(function(response) {
				$ionicLoading.hide();
				/* check */
				if (response.data.status == 'Invalid Token') {
					check_token();
				}
				if (response.data.status == 'OFF') {
					check_status_aplikasi(response.data.message);
				}
				if (response.data.status == 'Member Not Found') {
					check_status_member_not_found();
				}
				if (response.data.status == 'Member Not Active') {
					check_status_member();
				}
				message_notif = response.data.status;
				/* end check */

				var message = 'Lakukanlah Pembayaran dan Dilanjutkan Dengan Konfirmasi Pembayaran';

				$ionicPopup.alert({
					title: 'Notifikasi',
					template: message,
					buttons: [{
						text: 'OK',
						type: 'button-default',
						onTap: function() {
							$rootScope.total_order_unpaid = response.data.total_order_unpaid;
							$rootScope.total_cart = response.data.total_cart;
							dataPesananService.selectedPesananID = response.data.order_id;
							$ionicHistory.clearCache().then(function() {
								$ionicHistory.nextViewOptions({
									disableBack: true
								});
								$state.go('eventmenu.listdatadetailpesanan');
							});
						}
					}]
				});
			},
			function() {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		}
	}
})
.controller('datapesananController', function($scope, $state, $http, dataPesananService) {
	$scope.listPesanan = function(val) {
		$state.go('eventmenu.listdatapesanan');
		dataPesananService.jenisPesanan = val;
	}
})
.controller('listdatapesananController', function($scope, $state, $http, $ionicLoading, $ionicPopup, dataPesananService, resiService) {
	$scope.dataPesananService = dataPesananService;

	$scope.data_id = ['1', '2', '3', '4'];
	$ionicLoading.show()
	var link = base_url + 'get_data_order';
	$http({
		method: 'POST',
		url: link,
		data: {
			customer_id: window.localStorage['customer_id'],
			token: token,
			order_payment: dataPesananService.jenisPesanan,
			page: page_pesanan
		},
		timeout: 8000
	}).then(
	function(res) {
		$ionicLoading.hide()

		$scope.status_pesanan = dataPesananService.jenisPesanan;
		$scope.data_pesanan = res.data.list;
		$scope.tipe_customer = res.data.list[0].status_harga_customer;
	},
	function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.listPesanan = function(val) {
		$ionicLoading.show()
		var link = base_url + 'get_data_order';
		$http({
			method: 'POST',
			url: link,
			data: {
				customer_id: window.localStorage['customer_id'],
				token: token,
				order_payment: val,
				page: page_pesanan
			},
			timeout: 8000
		}).then(
		function(res) {
			$ionicLoading.hide()

			$scope.status_pesanan = val;
			$scope.data_pesanan = res.data.list;
			$scope.tipe_customer = res.data.list[0].status_harga_customer;
		},
		function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}
	$scope.detailPesanan = function(id) {
		dataPesananService.selectedPesananID = id;
		$state.go('eventmenu.listdatadetailpesanan');
	}

	$scope.cekResi = function(waybill, courier) {
		resiService.waybill = waybill;
		resiService.courier = courier;
		if (waybill == null || waybill == '' || waybill == ' ') {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'No Resi Untuk Pesanan Ini Masih Kosong'
			});
		} else {
			resiService.waybill = waybill;
			resiService.courier = courier;
			$state.go('eventmenu.cekresidetail');
		}
	}
})
.controller('cekresidetailController', function($scope, $state, $http, $ionicLoading, resiService) {
	$scope.resiService = resiService;
	$ionicLoading.show()
	var link = base_url + 'cek_resi';
	$http({
		method: 'POST',
		url: link,
		data: {
			customer_id: window.localStorage['customer_id'],
			token: token,
			waybill: '001609195556',
			courier: 'sicepat'
		},
		timeout: 20000
	}).then(function(res) {
		$ionicLoading.hide()

		$scope.courier_code = res.data.result.summary.courier_code;
		$scope.courier_name = res.data.result.summary.courier_name;
		$scope.waybill_number = res.data.result.summary.waybill_number;
		$scope.status = res.data.result.summary.status;
		$scope.service_code = res.data.result.summary.service_code;
		$scope.waybill_date = res.data.result.summary.waybill_date;
		$scope.receiver_name = res.data.result.summary.receiver_name;
		$scope.shipper_name = res.data.result.summary.shipper_name;

		$scope.manifest = res.data.result.manifest;
		$scope.delivery_status = res.data.result.delivery_status;
	}, function() {
		$ionicLoading.hide();
		alert('Data Tidak Ditemukan');
	});


})
.controller('listdatadetailpesananController', function($scope, $state, $http, $ionicLoading, $window, dataPesananService, $ionicPopup, $ionicHistory) {

	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];

	$scope.dataPesananService = dataPesananService;
	$ionicLoading.show();
	var link = base_url + 'get_data_order_detail';
	$http({
		method: 'POST',
		url: link,
		data: {
			customer_id: window.localStorage['customer_id'],
			token: token,
			order_id: dataPesananService.selectedPesananID
		},
		timeout: 80000
	}).then(function(res) {
		$ionicLoading.hide();
		$scope.data_pesanan = res.data.list;
		$scope.order_id = res.data.order_id;
		$scope.order_datetime = res.data.order_datetime;
		$scope.order_status = res.data.order_status;
		$scope.order_payment = res.data.order_payment;
		$scope.shipping_from = res.data.shipping_from;
		$scope.shipping_to = res.data.shipping_to;
		$scope.address_recipient = res.data.address_recipient;
		$scope.provinsi = res.data.provinsi;
		$scope.kota = res.data.kota;
		$scope.kecamatan = res.data.kecamatan;
		$scope.resi = res.data.resi;
		$scope.shipping_status = res.data.shipping_status;
		$scope.ekspedisi = res.data.ekspedisi;
		$scope.tarif_tipe = res.data.tarif_tipe;
		$scope.list_order = res.data.orders_item;
		$scope.shipping_fee = res.data.shipping_fee;
		$scope.total = res.data.total;
		$scope.potongan = res.data.potongan;
		$scope.rekening = res.data.rekening;
		$scope.ongkir = res.data.ongkir;
	},
	function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.confirmPayment = function() {
		if ($scope.ongkir === false && $scope.ekspedisi == 'lainnya') {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: '<p align="center">Admin belum memasukan tarif ongkir kargo, silahkan Chatting admin kembali</p>'
			});
		} else {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: '<div class="text-center">Silahkan isi data konfirmasi pembayaran jika sudah melakukan transfer ke rekening dibawah</div>',
				buttons: [{
					text: 'Belum',
					type: 'button-positive',
				}, {
					text: 'Sudah',
					type: 'button-positive',
					onTap: function() {
						$state.go('eventmenu.konfirmasipembayaran', {}, {
							reload: true
						});
						dataPesananService.order_id = $scope.order_id;
					},
				}]
			});
		}
	}
})
.controller('konfirmasipembayaranController', function($scope, $state, $http, $ionicLoading, $ionicPopup, $ionicHistory, $window, dataMessageService, dataPesananService, $ionicPopover, $ionicActionSheet, $cordovaCamera, $cordovaFile, $cordovaFileTransfer, $cordovaDevice) {
	$scope.postData = {};
	$scope.order_id = dataPesananService.order_id;
	$scope.selected_order = $scope.order_id === undefined ? 'Pilih ID Pesanan' : '';
	$ionicLoading.show();
	var link = base_url + 'get_data_order_unpaid';
	$http({
		method: 'POST',
		url: link,
		data: {
			customer_id: window.localStorage['customer_id'],
			token: token
		},
		timeout: 8000
	}).then(function(res) {
		$ionicLoading.hide()

		$scope.data_order_unpaid = res.data.list;
		$scope.tipe_customer = localStorage.getItem('customer_type');
		$scope.metode = res.data.metode;
	},
	function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	var template = '<ion-popover-view>' +
	'<ion-header-bar>' +
	'<h1 class="title">Pilih ID Pesanan</h1>' +
	'</ion-header-bar>' +
	'<ion-content>' +
	'<ul class="list-order-unpaid">' +
	'<li ng-repeat="data in data_order_unpaid" ng-click="cekTarifTipe($index)">' +
	'<div class="row">' +
	'<div class="col col-40">' +
	'<p>ID Pesanan</p>' +
	'<p>Total</p>' +
	'<p>Ekspedisi</p>' +
	'</div>' +
	'<div class="col col-60">' +
	'<p>: {{ data.order_id }}</p>' +
	'<p>: {{ data.total }}</p>' +
	'<p>: {{ data.ekspedisi }} - {{ data.tarif_tipe }}</p>' +
	'</div>' +
	'<div>' +
	'</li>' +
	'</ul>' +
	'</ion-content>' +
	'</ion-popover-view>';

	$scope.popover = $ionicPopover.fromTemplate(template, {
		scope: $scope
	});

	$scope.showListOrder = function($event) {
		$scope.popover.show($event);
	}

	$scope.cekTarifTipe = function(index) {
		var list_order = $scope.data_order_unpaid[index];
		if (list_order.ongkir === false && list_order.ekspedisi == 'LAINNYA') {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: '<p align="center">Admin belum memasukan tarif ongkir kargo, silahkan Chatting admin kembali</p>'
			});
			$scope.postData.list_order = '';
		} else {
			$scope.popover.hide();
			$scope.order_id = list_order.order_id;
			$scope.selected_order = '#' + list_order.order_id + ' - ' + list_order.total + ' - ' + list_order.ekspedisi + ' - ' + list_order.tarif_tipe;
		}
	}

	$scope.image = null;

	$scope.showAlert = function(title, msg) {
		$ionicPopup.alert({
			title: title,
			template: msg
		});
	};

	$scope.loadImage = function() {
		var hideSheet = $ionicActionSheet.show({
			buttons: [
			{ text: 'Pilih dari gallery' },
			{ text: 'Gunakan Kamera' }
			],
			titleText: 'Pilihan foto',
			cancelText: 'Batal',
			cancel: function() {
				console.log('Canceled');
			},
			buttonClicked: function(index) {
				var type = null;
				if (index === 0) {
					type = Camera.PictureSourceType.PHOTOLIBRARY;
				} else if (index === 1) {
					type = Camera.PictureSourceType.CAMERA;
				}
				if (type !== null) {
					$scope.selectPicture(type);
					hideSheet();
				}
			}
		});
	}

	$scope.selectPicture = function(sourceType) {
		var options = {
			quality: 30,
			destinationType: Camera.DestinationType.FILE_URI,
			sourceType: sourceType,
			saveToPhotoAlbum: false
		};

		$cordovaCamera.getPicture(options).then(function(imagePath) {
			// Grab the file name of the photo in the temporary directory
			var currentName = imagePath.replace(/^.*[\\\/]/, '');

			//Create a new name for the photo
			var d = new Date(),
			n = d.getTime(),
			newFileName = n + '.jpg';

			// If you are trying to load image from the gallery on Android we need special treatment!
			if ($cordovaDevice.platform == 'Android' && sourceType === Camera.PictureSourceType.PHOTOLIBRARY) {
				window.FilePath.resolveNativePath(imagePath, function(entry) {
					window.resolveLocalFileSystemURL(entry, success, fail);

					function fail(e) {
						console.error('Error: ', e);
					}

					function success(fileEntry) {
						var namePath = fileEntry.nativeURL.substr(0, fileEntry.nativeURL.lastIndexOf('/') + 1);
						// Only copy because of access rights
						$cordovaFile.copyFile(namePath, fileEntry.name, cordova.file.dataDirectory, newFileName).then(function(success) {
							setTimeout(function() {
								document.getElementById('jumlah_transfer').focus();
								$scope.image = $scope.pathForImage(newFileName);
							}, 500);
						}, function(error) {
							$scope.showAlert('Error', error.exception);
						});
					};
				});
			} else {
				var namePath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
				// Move the file to permanent storage
				$cordovaFile.moveFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function() {
					setTimeout(function() {
						document.getElementById('jumlah_transfer').focus();
						$scope.image = $scope.pathForImage(newFileName);
					}, 500);
				}, function(error) {
					$scope.showAlert('Error', error.exception);
				});
			}
		});
	};

	$scope.pathForImage = function(image) {
		if (image === null) {
			return '';
		} else {
			return cordova.file.dataDirectory + image;
		}
	};

	$scope.confirm_payment = function() {
		var order_id = $scope.order_id;
		var nama = $scope.postData.nama;
		var transfer_via = $scope.postData.transfer_via;
		var jumlah_transfer = $scope.postData.jumlah_transfer;
		var atas_nama = $scope.postData.atas_nama;
		var metode = $scope.postData.metode;

		if (order_id == null || order_id == '') {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Pilih Pesanan terlebih dahulu !'
			});
		} else if (nama == null) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Nama Tidak Boleh Kosong!'
			});
		} else if (metode == null || metode == '') {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Rekening Tujuan Tidak Boleh Kosong !'
			});
		} else if (transfer_via == null) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Transfer Via Bank Tidak Boleh Kosong !'
			});
		} else if (jumlah_transfer == null) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Jumlah Transfer Tidak Boleh Kosong !'
			});
		} else if (atas_nama == null) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Atas Nama Tidak Boleh Kosong !'
			});
		} else {
			var confirmPopup = $ionicPopup.confirm({
				title: 'Notifikasi',
				template: 'Konfirmasi Pembayaran ?'
			});

			confirmPopup.then(function(res) {
				if (res) {
					$ionicLoading.show()
					var params = {
						customer_id: window.localStorage['customer_id'],
						token: token,
						nama: nama,
						bank: transfer_via,
						jumlah: jumlah_transfer,
						rekening: atas_nama,
						order_id: order_id,
						metode: metode
					}
					if ($scope.image) {
						$scope.confirmAttach(params);
					} else {
						$scope.confirmWithoutAttach(params);
					}
				}
			});

			var confirm_url = base_url + 'confirm_payment';
			$scope.confirmAttach = function(params) {
				var targetPath = $scope.image;
				var filename = $scope.image;
				var options = {
					fileKey: 'file',
					fileName: filename,
					chunkedMode: false,
					mimeType: 'multipart/form-data',
					params: params
				};

				$cordovaFileTransfer.upload(confirm_url, targetPath, options).then(function(result) {
					$ionicLoading.hide();
					var response = JSON.parse(result.response);
					if (response.status == 'Success') {
						var alertPopup = $ionicPopup.confirm({
							title: 'Notifikasi',
							template: 'Pesanan Anda Sedang Dalam Proses, Terimakasih Sudah Berbelanja.'
						});
						alertPopup.then(function(response) {
							if (response) {
								$state.reload();
							} else {
								$state.reload();
							}
						});
					} else {
						$scope.showAlert('Gagal', response.error);
					}
				}, function(err) {
					$ionicLoading.hide();
					console.log(err)
				});
			}

			$scope.confirmWithoutAttach = function(params) {
				$http({
					method  : 'POST',
					url     : confirm_url,
					data    : params,
					timeout: 25000
				}).then(
				function(res) {
					$ionicLoading.hide();
					if (res.data.status == 'Success') {
						var alertPopup = $ionicPopup.confirm({
							title: 'Notifikasi',
							template: 'Pesanan Anda Sedang Dalam Proses, Terimakasih Sudah Berbelanja.'
						});
						alertPopup.then(function(response) {
							if (response) {
								$state.reload();
							} else {
								$state.reload();
							}
						});
					} else {
						$scope.showAlert('Gagal', res.data.error);
					}
				}, function(response) {
					$ionicLoading.hide();
					alert('Failed to continue, please check your internet connection');
				});
			}

		}
	}
})
.controller('pesanmasukController', function($scope, $state, $http, $ionicLoading, dataMessageService, $ionicPopup) {

	$ionicLoading.show()
	var link = base_url + 'get_list_message';
	$http({
		method: 'POST',
		url: link,
		data: {
			customer_id: window.localStorage['customer_id'],
			token: token,
			page: page_pesan
		},
		timeout: 8000
	}).then(
	function(res) {
		$ionicLoading.hide();
		$scope.status_msg = res.data.status;
		$scope.data_message = res.data.message;
	},
	function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.delete = function(id) {
		var confirmPopup = $ionicPopup.confirm({
			title: 'Konfirmasi',
			template: 'Hapus pesan ?'
		});

		confirmPopup.then(function(res) {
			if (res) {
				$ionicLoading.show();
				var url = base_url + 'deleteMsg';
				var data = {
					token: token,
					customer_id: localStorage.getItem('customer_id'),
					message_id: id
				};
				$http.post(url, data, {
					timeout: 8000
				}).then(function(res) {
					$ionicLoading.hide();
					if (res.data.status == 'Success') {
						$ionicPopup.alert({
							title: res.data.status,
							template: res.data.message
						});

						$state.reload();
					}
				}, function() {
					$ionicLoading.hide();
					alert('Failed to continue, please check your internet connection');
				});
			}
		});
	}

	$scope.clearMsg = function() {
		if ($scope.status_msg == 'Not_found') {
			$ionicPopup.alert({
				title: 'Info',
				template: 'Tidak ada pesan masuk'
			});
		} else {
			var confirmPopup = $ionicPopup.confirm({
				title: 'Konfirmasi',
				template: 'Hapus semua pesan ?'
			});

			confirmPopup.then(function(res) {
				if (res) {
					$ionicLoading.show();
					var url = base_url + 'deleteMsg';
					var data = {
						token: token,
						customer_id: localStorage.getItem('customer_id'),
						message_id: 0
					};
					$http.post(url, data, {
						timeout: 8000
					}).then(function(res) {
						$ionicLoading.hide();
						if (res.data.status == 'Success') {
							$ionicPopup.alert({
								title: res.data.status,
								template: res.data.message
							});

							$state.reload();
						}
					}, function() {
						$ionicLoading.hide();
						alert('Failed to continue, please check your internet connection');
					});
				}
			});
		}
	}

	$scope.detailMessage = function(id) {
		dataMessageService.selectedMessageId = id;
		$state.go('eventmenu.pesanmasukdetail');
	}

})
.controller('pesanmasukdetailController', function($scope, $state, $http, $ionicLoading, dataMessageService, $rootScope) {
	$scope.dataMessageService = dataMessageService;
	var message_id = dataMessageService.selectedMessageId;

	$ionicLoading.show()
	var link = base_url + 'get_detail_message';
	$http({
		method: 'POST',
		url: link,
		data: {
			customer_id: window.localStorage['customer_id'],
			token: token,
			message_id: message_id
		},
		timeout: 8000
	}).then(
	function(res) {
		$ionicLoading.hide()

		$scope.message_subject = res.data.subject;
		$scope.message_content = res.data.content;
		$rootScope.total_msg = res.data.total_msg;
	},
	function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

})
.controller('infoController', function($scope, $state, $http, $ionicLoading, $window, newsService) {
	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];

	if ($scope.customer_id === null) {
		$scope.isLogin = false;
	} else {
		$scope.isLogin = true;
	}

	$ionicLoading.show();
	var link = base_url + 'get_info';
	$http({
		method: 'POST',
		url: link,
		data: {
			token: token
		},
		timeout: 8000
	}).then(function(res) {
		$ionicLoading.hide();

		$scope.kontak = res.data.kontak;
		$scope.info = res.data.info;
		$scope.tipe_customer = res.data.status_harga_customer;
		$scope.list_news = res.data.news;
	},
	function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.toNews = function(id) {
		$state.go('eventmenu.newsDetail');
		newsService.id = id;
	}
})
.controller('newsController', function($scope, $state, $http, $ionicLoading, $window, newsService) {
	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];

	if ($scope.customer_id === null) {
		$scope.isLogin = false;
	} else {
		$scope.isLogin = true;
	}

	$ionicLoading.show();
	var link = base_url + 'get_news';
	$http({
		method: 'POST',
		url: link,
		data: {
			token: token
		},
		timeout: 8000
	}).then(function(res) {
		$ionicLoading.hide();
		$scope.list_news = res.data;
	},
	function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.toDetail = function(id) {
		$state.go('eventmenu.newsDetail');
		newsService.id = id;
	}
})
.controller('newsDetailController', function($scope, $state, $http, $ionicLoading, $window, newsService, $sce) {
	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];

	if ($scope.customer_id === null) {
		$scope.isLogin = false;
	} else {
		$scope.isLogin = true;
	}

	$ionicLoading.show();
	var link = base_url + 'detail_news';
	$http({
		method: 'POST',
		url: link,
		data: {
			token: token,
			id: newsService.id
		},
		timeout: 8000
	}).then(function(res) {
		$ionicLoading.hide();
		$scope.news = res.data;
		$scope.content = $sce.trustAsHtml(res.data.content);
	},
	function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.toDetail = function(id) {
		$state.go('eventmenu.newsDetail');
		newsService.id = id;
	}
})
.controller('rekeningController', function($scope, $state, $http, $ionicLoading, $window, ionicToast) {
	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];

	if (typeof $scope.customer_id === 'undefined') {
		$scope.isLogin = false;
	} else {
		$scope.isLogin = true;
	}

	$ionicLoading.show()
	var link = base_url + 'get_info';
	$http({
		method: 'POST',
		url: link,
		data: {
			customer_id: window.localStorage['customer_id'],
			token: token
		},
		timeout: 8000
	}).then(
	function(res) {
		$ionicLoading.hide();
		$scope.rekening = res.data.rekening;
		$scope.rekening1 = res.data.rekening1;
		$scope.rekening2 = res.data.rekening2;
		$scope.tipe_customer = res.data.status_harga_customer;
	},
	function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.successCopy = function(e) {
		e.clearSelection();
		ionicToast.show('No Rekening berhasil disalin', 'bottom', false, 3000);
	}

})
.controller('pengaturanController', function($scope, $state, $http, $ionicLoading, $ionicPopup, $window, $ionicHistory) {
	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];

	$scope.editProfil = function() {
		$state.go('eventmenu.editprofil');
	}

	$scope.logout = function() {
		var confirmPopup = $ionicPopup.confirm({
			title: 'Logout',
			template: 'Anda Yakin Keluar Aplikasi ?'
		});

		confirmPopup.then(function(res) {
			if (res) {
				$ionicLoading.show();
				var url = base_url + 'logout';
				var data = {
					token: token,
					customer_id: localStorage.getItem('customer_id'),
					registration_id: localStorage.getItem('registration_id'),
				};
				$http.post(url, data, {
					timeout: 8000
				}).then(function(resp) {
					$ionicLoading.hide();
					if (resp.data.status == 'Success') {
						$ionicLoading.hide();
						$window.localStorage.clear();
						$ionicHistory.clearCache();
						$ionicHistory.clearHistory();
						$ionicPopup.alert({
							title: resp.data.status,
							template: resp.data.message
						});
						document.location.href = 'index.html';
					}
				}, function() {
					$ionicLoading.hide();
					alert('Failed to continue, please check your internet connection');
				});
			}
		});
	}

})
.controller('editprofilController', function($scope, $state, $http, $ionicLoading, $ionicPopup, $window) {
	$scope.postData = {};

	$ionicLoading.show()
	var link_info = base_url + 'get_customer_info';
	$http({
		method: 'POST',
		url: link_info,
		data: {
			customer_id: window.localStorage['customer_id'],
			token: token
		},
		timeout: 8000
	}).then(
	function(res) {

		$scope.postData.id = res.data.id;
		$scope.postData.nama = res.data.name;
		$scope.postData.email = res.data.email;
		$scope.postData.phone = res.data.phone;
		$scope.postData.pin_bb = res.data.pin_bb;
		$scope.postData.postcode = res.data.postcode;
		$scope.postData.address = res.data.address;

		$scope.postData.status = res.data.status;
		$scope.tipe_customer = res.data.status_harga_customer;


		$scope.prov = res.data.prov;
		$scope.prov_id = res.data.prov_id;
		$scope.kota = res.data.kota;
		$scope.kota_id = res.data.kota_id;
		$scope.kecamatan = res.data.kecamatan;
		$scope.kecamatan_id = res.data.kecamatan_id;
		$scope.nama_sales = res.data.nama_sales;
	},
	function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.editProfilKota = false;
	$scope.editProfilKecamatan = false;

	var param = '?token=' + token_api + '&domain=' + domain_api;
	var link = base_url_api + '/province' + param;
	$http({
		method: 'GET',
		url: link,
		data: {},
		timeout: 8000
	}).then(
	function(res) {
		$ionicLoading.hide()

		$scope.data_provinsi = res.data.result;
	},
	function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});


	$scope.getKotaByProvinsi = function() {
		$ionicLoading.show()
		var param = '?token=' + token_api + '&domain=' + domain_api + '&province_id=' + $scope.postData.prov;
		var link = base_url_api + '/city' + param;
		$http({
			method: 'GET',
			url: link,
			data: {},
			timeout: 8000
		}).then(
		function(res) {
			$ionicLoading.hide()

			$scope.kota = '-Pilih Kota-';
			$scope.kota_id = '0';
			$scope.kecamatan = '-Pilih Kecamatan-';
			$scope.kecamatan_id = '0';


			$scope.editProfilKota = true;
			$scope.data_kota = res.data.result;
		},
		function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});

	}

	$scope.getKecamatanByKota = function() {
		$ionicLoading.show()
		var param = '?token=' + token_api + '&domain=' + domain_api + '&city_id=' + $scope.postData.kota;
		var link = base_url_api + '/subdistrict' + param;
		$http({
			method: 'GET',
			url: link,
			data: {},
			timeout: 8000
		}).then(
		function(res) {
			$ionicLoading.hide()

			$scope.kecamatan = '-Pilih Kecamatan-';
			$scope.kecamatan_id = '0';

			$scope.editProfilKecamatan = true;
			$scope.data_kecamatan = res.data.result;
		},
		function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.submit_edit_profile = function() {

		var nama = $scope.postData.nama;
		var email = $scope.postData.email;
		var phone = $scope.postData.phone;
		var alamat = $scope.postData.address;
		var kodepos = $scope.postData.postcode;

		var password = $scope.postData.password;
		var confirm_password = $scope.postData.confirm_password;

		var provinsi = $scope.postData.prov;
		var kota = $scope.postData.kota;
		var kecamatan = $scope.postData.kecamatan;

		if (provinsi == '0' || provinsi == null) {
			provinsi = $scope.prov_id;
		}
		if (kota == '0' || kota == null) {
			kota = $scope.kota_id;
		}
		if (kecamatan == '0' || kecamatan == null) {
			kecamatan = $scope.kecamatan_id;
		}

		if (password == confirm_password) {
			$ionicLoading.show()
			var link = base_url + 'update_settings';
			$http({
				method: 'POST',
				url: link,
				data: {
					customer_id: window.localStorage['customer_id'],
					token: token,
					nama: nama,
					email: email,
					phone: phone,
					password: password,
					alamat: alamat,
					kodepos: kodepos,
					provinsi: provinsi,
					kota: kota,
					kecamatan: kecamatan
				},
				timeout: 8000
			}).then(
			function(res) {

				$ionicLoading.hide()
				var confirmPopup = $ionicPopup.confirm({
					title: 'Notifikasi',
					template: res.data.status
				});

				confirmPopup.then(function(res) {
					if (res) {
						$window.location.reload(true);
					}
				});
			},
			function() {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		} else {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Password Tidak Sama !'
			});
		}

	}

})
.controller('updateController', function() {
})
.controller('notifikasiController', function($scope) {
	$scope.message = message_notif;
})
.controller('faqController', function($scope, $state, $http, $ionicLoading, $window, $sce) {
	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];

	if (typeof $scope.customer_id === 'undefined') {
		$scope.isLogin = false;
	} else {
		$scope.isLogin = true;
	}

	$ionicLoading.show()
	var link = base_url + 'get_faq';
	$http({
		method: 'POST',
		url: link,
		data: {
			customer_id: window.localStorage['customer_id'],
			token: token
		},
		timeout: 8000
	}).then(
	function(res) {
		$ionicLoading.hide()

		$scope.faq = $sce.trustAsHtml(res.data.value);
	},
	function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});


})
.controller('cekongkirController', function($scope, $state, $http, $ionicLoading, $window, dataPesananService) {
	$scope.postData = {};

	$ionicLoading.show();

	var param_city = '?token=' + token_api + '&domain=' + domain_api;
	var link_city = base_url_api + '/city' + param_city;
	$http.get(link_city).then(function(response) {
		var data = response.data.result;
		for (var i = 0; i < data.length; i++) {
			var type;
			if (data[i].type == 'Kabupaten') {
				type = 'Kab. ';
			} else {
				type = 'Kota ';
			}
			data[i]['name'] = type + data[i].city_name;
		}

		$scope.autocompleteKotaKe.searchlist = response.data.result;
		$scope.$root.$broadcast($scope.autocompleteKotaKe.ID);

		$ionicLoading.hide();
	}, function() {
		$scope.autocompleteKotaKe.searchlist = undefined;
		$scope.$root.$broadcast($scope.autocompleteKotaKe.ID);
	});

	$scope.autocompleteKotaKe = {
		'propNameToDisplay': 'name',
		'placeholder': 'Kota Tujuan',
		'ID': 'DataKotaKe',
		'listClass': ['list-border-energized'],
		'labelContainerClass': ['bottom-border']
	};

	$scope.getKotaKe = function(item) {
		var type;
		if (item) {
			if (item.type == 'Kabupaten') {
				type = 'Kab. ';
			} else {
				type = 'Kota ';
			}
			$scope.kota_tujuan_id = item.city_id;
			$scope.kota_tujuan_name = type + item.city_name;

			var param_kec = '?token=' + token_api + '&domain=' + domain_api + '&city_id=' + item.city_id;
			var link_kec = base_url_api + '/subdistrict' + param_kec;
			$http.get(link_kec).then(function(response) {
				$ionicLoading.hide();
				$scope.kecamatan = response.data.result;
			}, function() {
				alert('Failed to continue, please check your internet connection');
			});
		}
	};


	$scope.autocompleteKotaKe.itemSelectCallback = $scope.getKotaKe;

	$ionicLoading.show();
	var link = base_url + 'get_content';
	$http({
		method: 'POST',
		url: link,
		data: {
			customer_id: window.localStorage['customer_id'],
			token: token
		},
		timeout: 8000
	}).then(
	function(res) {

		/* check */
		if (res.data.status == 'Invalid Token') {
			check_token();
		}
		if (res.data.status == 'OFF') {
			check_status_aplikasi(res.data.message);
		}
		if (res.data.status == 'Member Not Found') {
			check_status_member_not_found();
		}
		if (res.data.status == 'Member Not Active') {
			check_status_member();
		}
		message_notif = res.data.status;
		/* end check */

		var json = res.data;

		dataPesananService.kecamatan_asal = json[19].value;
		dataPesananService.kota_asal_name = json[24].value;

		$ionicLoading.hide();
	},
	function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.cekongkir = function() {
		var kecamatan = $scope.postData.kecamatan_tujuan.split('#');
		dataPesananService.kota_tujuan_name = $scope.kota_tujuan_name;
		dataPesananService.kota_tujuan_name = $scope.kota_tujuan_name;
		dataPesananService.kecamatan_tujuan = kecamatan[0];
		dataPesananService.kecamatan_tujuan_name = kecamatan[1];
		dataPesananService.berat = $scope.postData.berat;
		$state.go('eventmenu.cekongkirdetail');
	}
})
.controller('cekongkirdetailController', function($scope, $state, $http, $ionicLoading, $window, dataPesananService, $ionicPopup) {

	$scope.dataPesananService = dataPesananService;
	$scope.kota_asal = $scope.dataPesananService.kota_asal;
	$scope.kota_asal_name = $scope.dataPesananService.kota_asal_name;

	$scope.kota_tujuan = $scope.dataPesananService.kota_tujuan;
	$scope.kota_tujuan_name = $scope.dataPesananService.kota_tujuan_name;


	$scope.kecamatan_asal = $scope.dataPesananService.kecamatan_asal;
	$scope.kecamatan_tujuan = $scope.dataPesananService.kecamatan_tujuan;
	$scope.kecamatan_tujuan_name = $scope.dataPesananService.kecamatan_tujuan_name;

	$scope.berat = $scope.dataPesananService.berat;


	get_ongkir_detail();

	function get_ongkir_detail() {
		var origin_city_id = dataPesananService.kecamatan_asal;
		$ionicLoading.show();
		var param = '?token=' + token_api + '&domain=' + domain_api + '&origin_city_id=' + origin_city_id + '&destination_id=' + $scope.kecamatan_tujuan + '&destination_type=subdistrict&weight=' + $scope.berat + '&satuan=gram&courier=jne:pos:tiki:wahana:jnt:sicepat';
		var link = base_url_api + '/cost' + param;
		$http({
			method: 'POST',
			url: link,
			data: {
				customer_id: window.localStorage['customer_id'],
				token: token,
				origin: $scope.kecamatan_asal,
				destination: $scope.kecamatan_tujuan,
				weight: $scope.berat
			},
			timeout: 20000
		}).then(function(res) {
			$ionicLoading.hide()

			$scope.data_ongkir = res.data.result;

		},
		function() {
			$ionicLoading.hide();
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Koneksi Gagal',
				buttons: [{
					text: 'Retry',
					type: 'button-default',
					onTap: function() {
						getOngkirDetail();
					}
				}]
			});
		});
	}


})
.controller('ticketingController', function($scope, $state, $http, $ionicLoading, $window, $rootScope) {
	$scope.postData = {};

	get_data();

	function get_data() {
		$ionicLoading.show()
		var link = base_url + 'get_tiket';
		$http({
			method: 'POST',
			url: link,
			data: {
				customer_id: window.localStorage['customer_id'],
				token: token
			},
			timeout: 8000
		}).then(
		function(res) {
			$ionicLoading.hide()

			$scope.tiket = res.data;
			$rootScope.total_ticket = 0;
		},
		function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.kirimbalasan = function() {

		$ionicLoading.show()
		var link = base_url + 'kirim_balasan';
		$http({
			method: 'POST',
			url: link,
			data: {
				customer_id: window.localStorage['customer_id'],
				token: token,
				balasan: $scope.postData.balasan
			},
			timeout: 8000
		}).then(function() {
			$ionicLoading.hide();
			get_data();
		},
		function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}
})
.controller('dashboardSearchController', function($scope, $stateParams, $state, $http, $ionicLoading, $timeout, $ionicHistory, $window, $ionicPopup, $ionicSlideBoxDelegate, productService, ionicToast, $rootScope) {
	$ionicLoading.show();
	var page = 1;
	$scope.title = productService.keyword;
	var link = base_url + 'get_search_product';
	$http({
		method: 'POST',
		url: link,
		data: {
			customer_id: window.localStorage['customer_id'],
			category: 'all',
			page: page,
			token: token,
			q: productService.keyword
		},
		timeout: 8000
	}).then(function(res) {
		$ionicLoading.hide();
		/* check */
		if (res.data.status == 'Invalid Token') {
			check_token();
		}
		if (res.data.status == 'OFF') {
			check_status_aplikasi(res.data.message);
		}
		if (res.data.status == 'Member Not Found') {
			check_status_member_not_found();
		}
		if (res.data.status == 'Member Not Active') {
			check_status_member();
		}
		message_notif = res.data.status;
		/* end check */


		$scope.katalog = res.data.product;
		localStorage.setItem('vip_member', res.data.vip_member);

		if (res.data.status == 'Not_found') {
			$ionicPopup.alert({
				title: 'Alert',
				template: 'No Data'
			});
		}
	},
	function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});
	$scope.detailBarang = function(id, category) {
		productService.category_name = category;
		productService.selectedProduct = id;
		page = 1;

		$state.go('eventmenu.detailbarang');
	}

	$scope.moreDataCanBeLoaded = function() {
		return true;
	}
	$scope.loadMoreData = function() {
		$ionicLoading.show();
		page += 1;

		var link = base_url + 'get_search_product';
		$http({
			method: 'POST',
			url: link,
			data: {
				customer_id: window.localStorage['customer_id'],
				category: 'all',
				page: page,
				token: token,
				q: productService.keyword
			},
			timeout: 8000
		}).then(function(res) {
			$ionicLoading.hide();
			var json = res.data;

			if (json != null) {
				if (json.status != 'Failed') {
					var length_j = Object.keys(json.product).length;
					if ($scope.katalog.length < json.total_product) {
						for (var x = 0; x < length_j; x++) {
							$scope.katalog.push({
								product_id: json.product[x].product_id,
								name_item: json.product[x].name_item,
								product_name: json.product[x].product_name,
								harga: json.product[x].harga,
								img_thumbnail: json.product[x].img_thumbnail,
								harga_lama: json.product[x].harga_lama,
								diskon_persen: json.product[x].diskon_persen,
								stock_variant: json.product[x].stock_variant,
								promo: json.product[x].promo,
								hot_sale: json.product[x].hot_sale,
							});
						}
						$scope.moredata = true;
						$scope.$broadcast('scroll.infiniteScrollComplete');

					}
				}
			}
		},
		function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.actionWishList = function(product_id, index) {
		$ionicLoading.show();
		var link_wishlist = $scope.katalog[index].wish_list ? 'removeWishlist' : 'addWishlist';
		var link = base_url + link_wishlist;
		$http({
			method: 'POST',
			url: link,
			data: {
				customer_id: window.localStorage['customer_id'],
				product_id: product_id,
				token: token
			},
			timeout: 8000
		}).then(function(res) {
			$ionicLoading.hide();
			/* check */
			if (res.data.status == 'Invalid Token') {
				check_token();
			}
			if (res.data.status == 'OFF') {
				check_status_aplikasi(res.data.message);
			}
			if (res.data.status == 'Member Not Found') {
				check_status_member_not_found();
			}
			if (res.data.status == 'Member Not Active') {
				check_status_member();
			}
			message_notif = res.data.status;
			/* end check */
			$scope.katalog[index].wish_list = !$scope.katalog[index].wish_list;
			$rootScope.wishlist = res.data.wishlist;
			ionicToast.show(res.data.message, 'bottom', false, 2000);
		},
		function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}
})
.controller('tipeKategoriController', function($scope, $stateParams, $state, $http, $ionicLoading, $timeout, $ionicHistory, $window, $ionicPopup, $ionicSlideBoxDelegate, productService, ionicToast, $rootScope) {
	$ionicLoading.show();
	$scope.title = $stateParams.type.toUpperCase();
	var link = base_url + 'product_type';
	$http({
		method: 'POST',
		url: link,
		data: {
			type: $stateParams.type,
			page: page,
			token: token,
			customer_id: localStorage.getItem('customer_id')
		},
		timeout: 8000
	}).then(function(res) {
		$ionicLoading.hide()
		/* check */
		if (res.data.status == 'Invalid Token') {
			check_token();
		}
		if (res.data.status == 'OFF') {
			check_status_aplikasi(res.data.message);
		}
		if (res.data.status == 'Member Not Found') {
			check_status_member_not_found();
		}
		if (res.data.status == 'Member Not Active') {
			check_status_member();
		}
		message_notif = res.data.status;
		/* end check */

		$scope.katalog = res.data.product;
		if (res.data.status == 'Not_found') {
			$ionicPopup.alert({
				title: 'Alert',
				template: 'No Data'
			});
		}
	},
	function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.cari_produk = function() {
		$ionicHistory.clearCache().then(function() {
			productService.keyword = $scope.postDataSearch.pencarian;
			$state.go('eventmenu.dashboardSearch');
		});
	}

	$scope.detailBarang = function(id, category) {
		productService.category_name = category;
		productService.selectedProduct = id;
		page = 1;

		$state.go('eventmenu.detailbarang');
	}

	$scope.moreDataCanBeLoaded = function() {
		return true;
	}
	$scope.loadMoreData = function() {
		$ionicLoading.show();
		page += 1;

		var link = base_url + 'product_type';
		$http({
			method: 'POST',
			url: link,
			data: {
				type: $stateParams.type,
				page: page,
				token: token,
				customer_id: localStorage.getItem('customer_id')
			},
			timeout: 8000
		}).then(function(res) {
			$ionicLoading.hide();
			var json = res.data;

			if (json != null) {
				if (json.status != 'Failed') {
					var length_j = Object.keys(json.product).length;
					if ($scope.katalog.length < json.total_product) {
						for (var x = 0; x < length_j; x++) {
							$scope.katalog.push({
								product_id: json.product[x].product_id,
								name_item: json.product[x].name_item,
								product_name: json.product[x].product_name,
								harga: json.product[x].harga,
								img_thumbnail: json.product[x].img_thumbnail,
								harga_lama: json.product[x].harga_lama,
								diskon_persen: json.product[x].diskon_persen,
								stock_variant: json.product[x].stock_variant,
								promo: json.product[x].promo,
								hot_sale: json.product[x].hot_sale,
							});
						}
						$scope.moredata = true;
						$scope.$broadcast('scroll.infiniteScrollComplete');

					}
				}
			}
		},
		function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.actionWishList = function(product_id, index, type) {
		var customer_id = localStorage.getItem('customer_id');
		if (customer_id === null) {
			$ionicPopup.alert({
				title: 'Alert',
				template: 'Silahkan masuk/daftar terlebih dahulu'
			});
			return false;
		}
		$ionicLoading.show();
		var link_wishlist = $scope.katalog[index].wish_list ? 'removeWishlist' : 'addWishlist';
		if (type == 'hot_sale') {
			link_wishlist = $scope.hot_sale[index].wish_list ? 'removeWishlist' : 'addWishlist';
		}

		var link = base_url + link_wishlist;
		$http({
			method: 'POST',
			url: link,
			data: {
				customer_id: window.localStorage['customer_id'],
				product_id: product_id,
				token: token
			},
			timeout: 8000
		}).then(function(res) {
			$ionicLoading.hide();
			/* check */
			if (res.data.status == 'Invalid Token') {
				check_token();
			}
			if (res.data.status == 'OFF') {
				check_status_aplikasi(res.data.message);
			}
			if (res.data.status == 'Member Not Found') {
				check_status_member_not_found();
			}
			if (res.data.status == 'Member Not Active') {
				check_status_member();
			}
			message_notif = res.data.status;
			/* end check */
			if (type == 'hot_sale') {
				$scope.hot_sale[index].wish_list = !$scope.hot_sale[index].wish_list;
			} else {
				$scope.katalog[index].wish_list = !$scope.katalog[index].wish_list;
			}
			$rootScope.wishlist = res.data.wishlist;
			ionicToast.show(res.data.message, 'bottom', false, 2000);
		},
		function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}
})
.controller('subKategoriController', function($scope, $stateParams, $state, $http, $ionicLoading, $timeout, $ionicHistory, $window, $ionicPopup, $ionicActionSheet, $ionicSlideBoxDelegate, productService, ionicToast, $rootScope, $ionicModal) {
	$scope.filterPrice = 'Retail';
	$scope.three_list = false;
	var priceSetting = localStorage.getItem('price');
	if (priceSetting) {
		$scope.filterPrice = priceSetting;
	}else{
		$scope.filterPrice = $scope.filterPrice;
	}
	var page = 1;
	$scope.title = productService.category_name;
	$ionicLoading.show();
	$scope.openLink = function(link, name) {
		console.log(link, name)
		if (name !== undefined) {
			productService.category_name = name;
		}
		if (link != '') {
			link = link.replace('://ckeystore.com/dev/', '');
			link = link.replace('http://ckeystore.com/dev/', '');
			link = link.replace('://ckeystore.com/', '');
			link = link.replace('http://ckeystore.com/', '');
			link = link.split('/');
			if (link[1] == 'product_type') {
				$state.go('eventmenu.tipeKategori', {
					type: link[2]
				}, {
					reload: true
				});
			} else if (link[1] == 'product_category') {
				var subKategori_id = link[2].split('-');
				$state.go('eventmenu.subKategori', {
					category: subKategori_id[0]
				}, {
					reload: true
				});
			} else if (link[1] == 'product_subcategory_ready') {
				productService.category = link[2];
				productService.page = 1;
					// $ionicHistory.clearCache().then(function() {
						$state.go('eventmenu.dashboardCategory', {
							category: link[2]
						});
					// });
				} else if (link[1] == 'new_product') {
					productService.category = 'hot_sale';
					productService.page = 1;
					// $ionicHistory.clearCache().then(function() {
						$state.go('eventmenu.dashboardCategory');
					// });
				} else if (link[1] == 'product_promo') {
					productService.category = 'promo';
					productService.page = 1;
					// $ionicHistory.clearCache().then(function() {
						$state.go('eventmenu.dashboardCategory');
					// });
				} else if (link[1] == 'news_detail') {
					newsService.id = link[2];
					$state.go('eventmenu.newsDetail');
				}
			}
		}
		var link = base_url + 'product_category';
		$http({
			method: 'POST',
			url: link,
			data: {
				price: $scope.filterPrice,
				category: $stateParams.category,
				page: page,
				token: token,
				customer_id: localStorage.getItem('customer_id')
			},
			timeout: 8000
		}).then(
		function(res) {
			$ionicLoading.hide();
			/* check */
			if (res.data.status == 'Invalid Token') {
				check_token();
			}
			if (res.data.status == 'OFF') {
				check_status_aplikasi(res.data.message);
			}
			if (res.data.status == 'Member Not Found') {
				check_status_member_not_found();
			}
			if (res.data.status == 'Member Not Active') {
				check_status_member();
			}
			message_notif = res.data.status;
			/* end check */

			$scope.katalog = res.data.product;
			$scope.categories = res.data.category;

			if (res.data.status == 'Not_found') {
				$ionicPopup.alert({
					title: 'Alert',
					template: 'No Data'
				});
			}
		},
		function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});

		$scope.cari_produk = function() {
			$ionicHistory.clearCache().then(function() {
				productService.keyword = $scope.postDataSearch.pencarian;
				$state.go('eventmenu.dashboardSearch');
			});
		}

		$scope.detailBarang = function(id, category) {
			productService.category_name = category;
			productService.selectedProduct = id;
			page = 1;

			$state.go('eventmenu.detailbarang');
		}

		$scope.changeViewSetting = function() {
			$scope.three_list = !$scope.three_list;
		}

		$scope.changePriceSetting = function(value) {
			$scope.$broadcast('scroll.infiniteScrollComplete');
			page = 1;
			localStorage.setItem('price', value);
			$scope.filterPrice = value;
			$http({
				method: 'POST',
				url: link,
				data: {
					size: $scope.filterSize,
					price: $scope.filterPrice,
					category: $stateParams.category,
					page: page,
					token: token,
					customer_id: localStorage.getItem('customer_id')
				},
				timeout: 8000
			}).then(
			function(res) {
				$ionicLoading.hide();
				/* check */
				if (res.data.status == 'Invalid Token') {
					check_token();
				}
				if (res.data.status == 'OFF') {
					check_status_aplikasi(res.data.message);
				}
				if (res.data.status == 'Member Not Found') {
					check_status_member_not_found();
				}
				if (res.data.status == 'Member Not Active') {
					check_status_member();
				}
				message_notif = res.data.status;
				/* end check */

				$scope.katalog = res.data.product;
				$scope.categories = res.data.category;

				if (res.data.status == 'Not_found') {
					$ionicPopup.alert({
						title: 'Alert',
						template: 'No Data'
					});
				}
			},
			function() {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		}

		$scope.changeSizeSetting = function(value) {
			$scope.$broadcast('scroll.infiniteScrollComplete');
			page = 1;
			$scope.filterSize = value;
			$http({
				method: 'POST',
				url: link,
				data: {
					size: value,
					price: $scope.filterPrice,
					category: $stateParams.category,
					page: page,
					token: token,
					customer_id: localStorage.getItem('customer_id')
				},
				timeout: 8000
			}).then(
			function(res) {
				$ionicLoading.hide();
				/* check */
				if (res.data.status == 'Invalid Token') {
					check_token();
				}
				if (res.data.status == 'OFF') {
					check_status_aplikasi(res.data.message);
				}
				if (res.data.status == 'Member Not Found') {
					check_status_member_not_found();
				}
				if (res.data.status == 'Member Not Active') {
					check_status_member();
				}
				message_notif = res.data.status;
				/* end check */

				$scope.katalog = res.data.product;
				$scope.categories = res.data.category;

				if (res.data.status == 'Not_found') {
					$ionicPopup.alert({
						title: 'Alert',
						template: 'No Data'
					});
				}
			},
			function() {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		}

		$ionicModal.fromTemplateUrl('templates/modalPrice.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modalPrice = modal;
		});

		$scope.openModalPrice = function() {
			$scope.modalPrice.show();
		};

		$scope.closeModalPrice = function() {
			$scope.modalPrice.hide();
		};

		$ionicModal.fromTemplateUrl('templates/modalSize.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modalSize = modal;
		});

		$scope.openModalSize = function() {
			$scope.modalSize.show();
		};

		$scope.closeModalSize = function() {
			$scope.modalSize.hide();
		};

		$scope.moreDataCanBeLoaded = function() {
			return true;
		}
		$scope.loadMoreData = function() {
			$ionicLoading.show();
			page += 1;

			var link = base_url + 'product_category';
			$http({
				method: 'POST',
				url: link,
				data: {
					size: $scope.filterSize,
					price: $scope.filterPrice,
					category: $stateParams.category,
					page: page,
					token: token,
					customer_id: localStorage.getItem('customer_id')
				},
				timeout: 8000
			}).then(
			function(res) {
				$ionicLoading.hide()
				var json = res.data;

				if (json != null) {
					if (json.status != 'Not_found') {
						var length_j = Object.keys(json.product).length;

						if ($scope.katalog.length < json.total_product) {
							for (var x = 0; x < length_j; x++) {
								$scope.katalog.push({
									product_id: json.product[x].product_id,
									name_item: json.product[x].name_item,
									product_name: json.product[x].product_name,
									harga: json.product[x].harga,
									img_thumbnail: json.product[x].img_thumbnail,
									harga_lama: json.product[x].harga_lama,
									diskon_persen: json.product[x].diskon_persen,
									stock_variant: json.product[x].stock_variant,
									promo: json.product[x].promo,
									hot_sale: json.product[x].hot_sale,
								});
							}
							$scope.moredata = true;
							$scope.$broadcast('scroll.infiniteScrollComplete');

						}
					}
				}
			},
			function() {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});

		};

		$scope.toDashboard = function() {
			$ionicHistory.clearCache().then(function() {
				$ionicHistory.nextViewOptions({
					disableBack: true
				});
				$scope.back = false;
				$state.go('eventmenu.dashboard');
			});
		}

		$scope.doRefresh = function() {
			$timeout(function() {
				$scope.katalog.push('New Item ' + Math.floor(Math.random() * 1000) + 4);
				$scope.$broadcast('scroll.refreshComplete');

			}, 1000);

		};

		$scope.actionWishList = function(product_id, index, type) {
			var customer_id = localStorage.getItem('customer_id');
			if (customer_id === null) {
				$ionicPopup.alert({
					title: 'Alert',
					template: 'Silahkan masuk/daftar terlebih dahulu'
				});
				return false;
			}
			$ionicLoading.show();
			var link_wishlist = $scope.katalog[index].wish_list ? 'removeWishlist' : 'addWishlist';
			if (type == 'hot_sale') {
				link_wishlist = $scope.hot_sale[index].wish_list ? 'removeWishlist' : 'addWishlist';
			}

			var link = base_url + link_wishlist;
			$http({
				method: 'POST',
				url: link,
				data: {
					customer_id: window.localStorage['customer_id'],
					product_id: product_id,
					token: token
				},
				timeout: 8000
			}).then(function(res) {
				$ionicLoading.hide();
				/* check */
				if (res.data.status == 'Invalid Token') {
					check_token();
				}
				if (res.data.status == 'OFF') {
					check_status_aplikasi(res.data.message);
				}
				if (res.data.status == 'Member Not Found') {
					check_status_member_not_found();
				}
				if (res.data.status == 'Member Not Active') {
					check_status_member();
				}
				message_notif = res.data.status;
				/* end check */
				if (type == 'hot_sale') {
					$scope.hot_sale[index].wish_list = !$scope.hot_sale[index].wish_list;
				} else {
					$scope.katalog[index].wish_list = !$scope.katalog[index].wish_list;
				}
				$rootScope.wishlist = res.data.wishlist;
				ionicToast.show(res.data.message, 'bottom', false, 2000);
			},
			function() {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		}

	})
.controller('chattingController', function($scope, $rootScope, $state, $http, $ionicLoading, $timeout, $ionicScrollDelegate, $location, $anchorScroll, moment, $ionicPopup) {

	$scope.data = {};
	var alternate,
	isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();
	get_data();

	function get_data() {
		$ionicLoading.show()
		var link = base_url + 'get_chat';
		$http({
			method: 'POST',
			url: link,
			data: {
				customer_id: window.localStorage['customer_id'],
				token: token
			},
			timeout: 8000
		}).then(
		function(res) {
			var json = res.data;

			$ionicLoading.hide()
			$scope.tiket = res.data;
			$scope.no_wa = json.no_wa.value;
			$scope.link_ig = json.link_ig.value;
			$scope.link_tiktok = json.link_tiktok.value;
			console.log(json)

			for (var i = 0; i < $scope.tiket.length; i++) {
				if ($scope.tiket[i].sender == 'Customer') {
					$scope.tiket[i].sender = localStorage.getItem('customer_name');
				}
			}

			$rootScope.total_chat = 0;

			$timeout(function() {
				$ionicScrollDelegate.scrollBottom(true);
			}, 300);
		},
		function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.clearMsg = function() {
		if ($scope.status_msg == 'Not_found') {
			$ionicPopup.alert({
				title: 'Info',
				template: 'Tidak ada pesan masuk'
			});
		} else {
			var confirmPopup = $ionicPopup.confirm({
				title: 'Konfirmasi',
				template: 'Hapus semua pesan ?'
			});

			confirmPopup.then(function(res) {
				if (res) {
					$ionicLoading.show();
					var url = base_url + 'deleteChat';
					var data = {
						token: token,
						customer_id: localStorage.getItem('customer_id'),
					};
					$http.post(url, data, {
						timeout: 8000
					}).then(function(res) {
						$ionicLoading.hide();
						if (res.data.status == 'Success') {
							$ionicPopup.alert({
								title: res.data.status,
								template: res.data.message
							});

							$state.reload();
						}
					}, function() {
						$ionicLoading.hide();
						alert('Failed to continue, please check your internet connection');
					});
				}
			});
		}
	}

	$scope.sendMessage = function() {
		alternate = !alternate;
		$ionicLoading.show()
		var link = base_url + 'sendChat';
		$http({
			method: 'POST',
			url: link,
			data: {
				customer_id: window.localStorage['customer_id'],
				token: token,
				balasan: $scope.data.message
			},
			timeout: 8000
		}).then(
		function() {
			$ionicLoading.hide();
			$scope.data.message = '';
			get_data();
			$location.hash('bottom');
			$anchorScroll();
		},
		function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});

		delete $scope.data.message;
		$ionicScrollDelegate.scrollBottom(true);
	};

	$scope.inputUp = function() {
		if (isIOS) $scope.data.keyboardHeight = 216;
		$timeout(function() {
			$ionicScrollDelegate.scrollBottom(true);
		}, 300);
	};

	$scope.inputDown = function() {
		if (isIOS) $scope.data.keyboardHeight = 0;
		$ionicScrollDelegate.resize();
	};

	$scope.closeKeyboard = function() {};
	$scope.data = {};
	$scope.myId = '12345';
	$scope.messages = [];
})
.directive('input', function($timeout) {
	return {
		restrict: 'E',
		scope: {
			'returnClose': '=',
			'onReturn': '&',
			'onFocus': '&',
			'onBlur': '&'
		},
		link: function(scope, element) {
			element.bind('focus', function() {
				if (scope.onFocus) {
					$timeout(function() {
						scope.onFocus();
					});
				}
			});
			element.bind('blur', function() {
				if (scope.onBlur) {
					$timeout(function() {
						scope.onBlur();
					});
				}
			});
			element.bind('keydown', function(e) {
				if (e.which == 13) {
					if (scope.returnClose) element[0].blur();
					if (scope.onReturn) {
						$timeout(function() {
							scope.onReturn();
						});
					}
				}
			});
		}
	}
});