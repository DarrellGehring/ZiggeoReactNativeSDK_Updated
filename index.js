import { NativeModules, NativeEventEmitter } from 'react-native';

const { ZiggeoPlayer } = NativeModules;
const { ZiggeoRecorder } = NativeModules;

export default {
	// ZiggeoRecorder
	setAppToken: function (appToken: string) {
		ZiggeoPlayer.setAppToken(appToken);
		ZiggeoRecorder.setAppToken(appToken);
  	},
	setAutostartRecordingAfter: function (seconds) {
		ZiggeoRecorder.setAutostartRecordingAfter(seconds);
  	},
  	/**
 	  * @deprecated Use `setExtraArgsForRecorder` instead.
 	  */
	setExtraArgsForCreateVideo: function (map) {
		ZiggeoRecorder.setExtraArgsForCreateVideo(map);
  	},
	setExtraArgsForRecorder: function (map) {
		ZiggeoRecorder.setExtraArgsForRecorder(map);
  	},
	setExtraArgsForPlayer: function (map) {
		ZiggeoPlayer.setExtraArgsForPlayer(map);
  	},
	setCoverSelectorEnabled: function (enabled) {
		ZiggeoRecorder.setCoverSelectorEnabled(enabled);
  	},
	setMaxRecordingDuration: function (seconds) {
		ZiggeoRecorder.setMaxRecordingDuration(seconds);
  	},
	setCameraSwitchEnabled: function (enabled) {
		ZiggeoRecorder.setCameraSwitchEnabled(enabled);
  	},
	setSendImmediately: function (sendImmediately) {
		ZiggeoRecorder.setSendImmediately(sendImmediately);
  	},
	setQuality: function (quality) {
		ZiggeoRecorder.setQuality(quality);
  	},
	setCamera: function (camera) {
		ZiggeoRecorder.setCamera(camera);
  	},
	record: async function () {
		return ZiggeoRecorder.record();
  	},
	uploadFromFileSelector: async function () {
		return ZiggeoRecorder.uploadFromFileSelector(0, false);
	},
	uploadFromPath: async function (fileName) {
		return ZiggeoRecorder.uploadFromPath(fileName);
	},
	uploadFromFileSelectorWithDurationLimit: async function (maxAllowedDurationInSeconds, enforceDuration) {
		if(!enforceDuration){
			enforceDuration = false;
		}
		return ZiggeoRecorder.uploadFromFileSelector(maxAllowedDurationInSeconds, enforceDuration);
	},
	cancelRequest: function () {
		ZiggeoRecorder.cancelRequest();
  	},
	recorderEmitter: function() {
		return recorderEmitter = new NativeEventEmitter(ZiggeoRecorder);
	},

  	// ZiggeoPlayer
  	play: function (videoId: string) {
		ZiggeoPlayer.play(videoId);
  	},

  	// Constants
  	REAR_CAMERA: ZiggeoRecorder.rearCamera,
  	FRONT_CAMERA: ZiggeoRecorder.frontCamera,
  	HIGH_QUALITY: ZiggeoRecorder.highQuality,
  	MEDIUM_QUALITY: ZiggeoRecorder.mediumQuality,
  	LOW_QUALITY: ZiggeoRecorder.lowQuality
 };
