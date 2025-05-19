
export var getExportSettingsXml = function() {
  return exportSettingsXml;
}

export var getSequenceExportSettingsXml = function() {
  return sequenceExportSettingsXml;
}

const exportSettingsXml = `<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<!DOCTYPE Avid:StreamItems SYSTEM "AvidSettingsFile.dtd">
<Avid:StreamItems xmlns:Avid="http://www.avid.com">

  <Avid:XMLFileData>
    <AvProp name="DomainMagic" type="string">Domain</AvProp>
    <AvProp name="DomainKey" type="char4">1480739396x</AvProp>
    <AvClass id="SETG"/>
    <AvClass id="EXst">
      <AvProp id="ASET" name="name" type="string">replace-name</AvProp>
      <AvProp id="ASET" name="kind" type="string">Export</AvProp>
      <AvProp id="ASET" name="attributes" type="int16">129</AvProp>
      <AvProp id="ASET" name="type" type="int16">18</AvProp>
      <AvProp id="EXst" name="iAudioMode" type="int16">5</AvProp>
      <AvProp id="EXst" name="iUseMarks" type="Boolean">FALSE</AvProp>
      <AvProp id="EXst" name="iUseEnabledTracks" type="Boolean">FALSE</AvProp>
      <AvProp id="EXst" name="iEnableMaskMargins" type="Boolean">FALSE</AvProp>
      <AvProp id="EXst" name="iQTCodecType" type="int32">1919706400</AvProp>
      <AvProp id="EXst" name="iQTTemporalQuality" type="int32">768</AvProp>
      <AvProp id="EXst" name="iQTSpatialQuality" type="int32">768</AvProp>
      <AvProp id="EXst" name="iDestWidth" type="int16">1920</AvProp>
      <AvProp id="EXst" name="iDestHeight" type="int16">1080</AvProp>
      <AvProp id="EXst" name="iColorLevel" type="int16">1</AvProp>
      <AvProp id="EXst" name="iSeqFrameRate" type="double">24.000000</AvProp>
      <AvProp id="EXst" name="iQTFrameRate" type="double">0.000000</AvProp>
      <AvProp id="EXst" name="iQTMoviePreview" type="Boolean">FALSE</AvProp>
      <AvProp id="EXst" name="iQTCrossPlatformMovie" type="Boolean">FALSE</AvProp>
      <AvProp id="EXst" name="iQTKeyFrameRate" type="int32">30</AvProp>
      <AvProp id="EXst" name="iQTAudioSampleRateItem" type="int16">0</AvProp>
      <AvProp id="EXst" name="iQTAudioSampleSizeItem" type="int16">0</AvProp>
      <AvProp id="EXst" name="iQTDepth" type="int16">24</AvProp>
      <AvProp id="EXst" name="iUseBothFields" type="Boolean">TRUE</AvProp>
      <AvProp id="EXst" name="iSequentialFiles" type="Boolean">FALSE</AvProp>
      <AvProp id="EXst" name="iQTUseSourceCompression" type="Boolean">TRUE</AvProp>
      <AvProp id="ASET" name="attrList" type="reference">
        <AvClass id="ATTR">
          <AvProp id="ATTR" name="__OMFI:ATTR:NumItems" type="int32">136</AvProp>
          <List id="OMFI:ATTR:AttrRefs">
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_ASK_FILTER_MEDIA_VIDEO</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_ASK_FILTER_MEDIA_AUDIO</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_QUANTIZE_AUDIO_AUTOMATION</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">2</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AMAFI_2AllowVideo</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:StringAttribute" type="string">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">2</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AMAFI_2AllowAudio</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:StringAttribute" type="string">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">2</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AMAFI_2SameAsSourceHint</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:StringAttribute" type="string">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">2</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AMAFI_2VidoEncoding</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:StringAttribute" type="string">{"properties":[{"name":"custom.AspectRatio","value":"16//9","type":""},{"name":"custom.CodingEquations","value":"04010101-0202-0000-060e-2b3404010101","type":""},{"name":"custom.ColorPrimaries","value":"04010101-0303-0000-060e-2b3404010106","type":""},{"name":"custom.ColorScaling","value":"0","type":""},{"name":"custom.RDD9Enabled","value":"0","type":""},{"name":"custom.ReformatOption","value":"0","type":""},{"name":"custom.TransferCharacteristic","value":"04010101-0102-0000-060e-2b3404010101","type":""},{"name":"descriptor.blackreferencelevel","value":"16","type":"aafUInt32"},{"name":"descriptor.characteristic","value":"709","type":""},{"name":"descriptor.componentwidth","value":"8","type":"aafUInt32"},{"name":"descriptor.compression","value":"04010202-7126-0000-060e-2b340401010d","type":"AUID"},{"name":"descriptor.displayheight","value":"1080","type":"aafUInt32"},{"name":"descriptor.displaywidth","value":"1920","type":"aafUInt32"},{"name":"descriptor.dominance","value":"0","type":"aafIndirect"},{"name":"descriptor.equations","value":"709","type":""},{"name":"descriptor.framelayout.asvalue","value":"0","type":"aafInt64"},{"name":"descriptor.horizontalsubsampling","value":"2","type":"aafUInt32"},{"name":"descriptor.openexrchromaticities","value":"709","type":""},{"name":"descriptor.pixelaspectratio","value":"1//1","type":""},{"name":"descriptor.preset","value":"dnx//hr//1272//422","type":""},{"name":"descriptor.sampledheight","value":"1080","type":"aafUInt32"},{"name":"descriptor.sampledwidth","value":"1920","type":"aafUInt32"},{"name":"descriptor.samplerate","value":"24//1","type":"Rational"},{"name":"descriptor.storedheight","value":"1080","type":"aafUInt32"},{"name":"descriptor.storedwidth","value":"1920","type":"aafUInt32"},{"name":"descriptor.type","value":"cdcidescriptor","type":"aafString"},{"name":"descriptor.verticalsubsampling","value":"1","type":"aafUInt32"},{"name":"descriptor.whitereferencelevel","value":"235","type":"aafUInt32"},{"name":"filemob.datadefinition","value":"picture","type":"aafString"}]}</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">2</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AMAFI_2SourceRaster</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:StringAttribute" type="string">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">2</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AMAFI_2AudioCodec</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:StringAttribute" type="string">{"properties":[{"name":"custom.MixMode","value":"1","type":""},{"name":"descriptor.audiosamplingrate","value":"48000//1","type":"Rational"},{"name":"descriptor.channels","value":"1","type":"aafUInt32"},{"name":"descriptor.compression","value":"04020201-0100-0000-060e-2b340401010a","type":"AUID"},{"name":"descriptor.quantizationbits","value":"24","type":"aafUInt32"},{"name":"filemob.datadefinition","value":"sound","type":"aafString"}]}</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AMAFI_EXPORT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">2</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_DOMINANCE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_EXPORTFORMAT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">9</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_EXPORTVERSION</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">512</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_MEDIATYPES</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">3</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_VIDEOFORMAT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">2</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_HIIPSETTINGS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:StringAttribute" type="string"></AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_AUDIOSRATE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">-1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_AUDIOFORMAT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">3</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_EXPORTAUDIOSAMPLESIZE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">-1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QT_SPIT_SUBTYPE_TAG</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QT_SPIT_MANUFACTURER_TAG</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_RESIZECHOICE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QTREF_RENDERVIDEOEFFECTS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QTREF_MIXDOWNAUDIO</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QTREF_FILLBLACK</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QTREF_NETWORKREFERENCES</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QTREF_CREATESHARES</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QTREF_AVIDDVCODEC</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_QTREF_SAMPLERATE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">-1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_QTREF_SAMPLESIZE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">-1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_QTREF_AUDIOFORMAT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">4</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_QTREF_ASPECTRATIO</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">3</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_QTREF_DEFAULTS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">2</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QTREF_FLATTENVIDEOTRACKS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QTEXP_MAKEPROGRESSIVEDOWNLOAD</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QTEXP_EXPORTCUTS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QTEXP_APPLYMATRIX</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QTEXP_MATRIXTYPE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QTEXP_EXPORTTIMECODE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_EXPORTACTIVETAB</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTVIDEOLINK</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTAUDIOLINK</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTVIDEOHANDLELEN</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">60</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTAUDIOHANDLELEN</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">60</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_AINCRENDEREFFECTS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTAUNIVERSALSAMPLERATE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTAUNIVERSALFILEFORMAT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_QTAVISAMPLERATE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">-1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_QTAVIAUDIOFORMAT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">4</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_QTAVISAMPLESIZE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">-1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_OMFAAFSAMPLERATE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">-1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_OMFAAFAUDIOFORMAT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">4</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_OMFAAFSAMPLESIZE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">-1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_AAFAUDIOFORMAT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">4</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTRENDERAUDIOFX</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTRENDERVIDEOFX</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTMIXDOWAUDIOFX</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTMIXDOWNAUDIOTRKLIM</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTMIXDOWVIDEOTO1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTAUNIVERSALSAMPLESIZE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTTRANSCODEVIDEO</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTTARGETTRANSCODEVCID</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">3485</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTTARGETENCODINGPROFILE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTTARGETTRANSCODEDOMAIN</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTUSEFORAVIDLINKSPT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTAAFEDITPROTOCOL</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTAAFOMFCOMPATIBLEIDS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_EXPORTBITRATE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">7800000</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_ASPECT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">2</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_PROFILE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">256</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_LEVEL</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">4096</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_HDVVIDEOQUAL</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_HDVSTREAMTYPE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_ENCODING_MODE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_PIXELFORMAT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_GOPLENGTH</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">15</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_SEARCHRANGE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">3</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_SCENECHANGE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">2</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_FIELDTOPNESS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_STREAMTYPE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_AUDIOCODEC</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_AUDIODATARATE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_OUTPUTSTATS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_EXPORTLOCATORFRAMES</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_USE_TOPMOST_IMAGE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_USE_LOCATOR_COMMENT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_XDCAM_VIDEO_FORMAT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">4</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_XDCAM_AUDIO_BIT_DEPTH</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">16</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_XDCAM_ASPECT_RATIO</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_XDCAM_FORCE_REENCODE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">4</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTVIDEOCOPYDEST_UTF8</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobSize" type="int32">6</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobData" type="bytes">6 0 0 43 3a 5c 0 </AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">2</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTVIDEOCOPYDEST</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:StringAttribute" type="string">C:\</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">4</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTAUDIOCOPYDEST_UTF8</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobSize" type="int32">6</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobData" type="bytes">6 0 0 43 3a 5c 0 </AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">2</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTAUDIOCOPYDEST</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:StringAttribute" type="string">C:\</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">4</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTPUBLISHCOPYDEST_UTF8</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobSize" type="int32">35</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobData" type="bytes">35 0 0 43 3a 5c 55 73 65 72 73 5c 72 73 61 63 69 5c 4f 6e 65 44 72 69 76 65 5c 44 65 73 6b 74 6f 70 5c 0 </AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">2</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTPUBLISHCOPYDEST</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:StringAttribute" type="string">C:\Users\rsaci\OneDrive\Desktop\</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">4</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTAUDIOVOLUME_UTF8</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobSize" type="int32">18</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobData" type="bytes">18 0 0 4e 65 77 20 56 6f 6c 75 6d 65 20 28 44 3a 29 0 </AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">2</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTAUDIOVOLUME</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:StringAttribute" type="string">New Volume (D:)</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">4</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTVIDEOVOLUME_UTF8</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobSize" type="int32">18</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobData" type="bytes">18 0 0 4e 65 77 20 56 6f 6c 75 6d 65 20 28 44 3a 29 0 </AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">2</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTVIDEOVOLUME</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:StringAttribute" type="string">New Volume (D:)</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_AUDIO_MODE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">5</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_USE_MARKS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_USE_ENABLED_TRACKS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_EXPORT_INACTIVE_AUDIO</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_ENABLE_MASK_MARGINS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_QT_CODEC_TYPE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1919706400</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_QT_TEMP_QUALITY</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">768</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_QT_SPAC_QUALITY</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">768</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_QT_DEST_WIDTH</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1920</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_QT_DEST_HEIGHT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1080</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_COLOR_LEVEL</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">4</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_SEQ_FRAME_RATE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobSize" type="int32">8</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobData" type="bytes">8 0 0 0 0 0 0 38 40 </AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">4</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_QT_FRAME_RATE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobSize" type="int32">8</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobData" type="bytes">8 0 0 0 0 0 0 0 0 </AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_QT_MOVIE_PREVIEW</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_QT_XPLATFORM_MOV</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_QT_KEYFRAME_RATE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">30</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_QT_DEPTH</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">24</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_QT_USE_BOTH_FIELDS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_SEQ_FILES</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_USE_SOURCE_COMPR</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_EXPORT_USE_AUDIO_MAPPING</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_EXPORT_EXPORT_REVEAL_FILES</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Audio_Mixdown_Top</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Audio_Mixdown_Master</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Audio_Mixdown_Tracks</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">2</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Video_Destination</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Video_Mixdown</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Video_Mixdown_Type</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Video_Same_Folder</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Video_MCSettings</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Audio_Destination</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Audio_Mixdown</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Audio_Same_Folder</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Audio_MCSettings</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Audio_RemoveTrackEffects</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Audio_SplitTracks</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem/>
          </List>
        </AvClass>
      </AvProp>
    </AvClass>
  </Avid:XMLFileData>

</Avid:StreamItems>
`;

const sequenceExportSettingsXml = `<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<!DOCTYPE Avid:StreamItems SYSTEM "AvidSettingsFile.dtd">
<Avid:StreamItems xmlns:Avid="http://www.avid.com">

  <Avid:XMLFileData>
    <AvProp name="DomainMagic" type="string">Domain</AvProp>
    <AvProp name="DomainKey" type="char4">1480739396x</AvProp>
    <AvClass id="SETG"/>
    <AvClass id="EXst">
      <AvProp id="ASET" name="name" type="string">replace-name</AvProp>
      <AvProp id="ASET" name="kind" type="string">Export</AvProp>
      <AvProp id="ASET" name="attributes" type="int16">129</AvProp>
      <AvProp id="ASET" name="type" type="int16">18</AvProp>
      <AvProp id="EXst" name="iAudioMode" type="int16">5</AvProp>
      <AvProp id="EXst" name="iUseMarks" type="Boolean">TRUE</AvProp>
      <AvProp id="EXst" name="iUseEnabledTracks" type="Boolean">TRUE</AvProp>
      <AvProp id="EXst" name="iEnableMaskMargins" type="Boolean">FALSE</AvProp>
      <AvProp id="EXst" name="iQTCodecType" type="int32">1919706400</AvProp>
      <AvProp id="EXst" name="iQTTemporalQuality" type="int32">768</AvProp>
      <AvProp id="EXst" name="iQTSpatialQuality" type="int32">768</AvProp>
      <AvProp id="EXst" name="iDestWidth" type="int16">1920</AvProp>
      <AvProp id="EXst" name="iDestHeight" type="int16">1080</AvProp>
      <AvProp id="EXst" name="iColorLevel" type="int16">1</AvProp>
      <AvProp id="EXst" name="iSeqFrameRate" type="double">24.000000</AvProp>
      <AvProp id="EXst" name="iQTFrameRate" type="double">0.000000</AvProp>
      <AvProp id="EXst" name="iQTMoviePreview" type="Boolean">FALSE</AvProp>
      <AvProp id="EXst" name="iQTCrossPlatformMovie" type="Boolean">FALSE</AvProp>
      <AvProp id="EXst" name="iQTKeyFrameRate" type="int32">30</AvProp>
      <AvProp id="EXst" name="iQTAudioSampleRateItem" type="int16">0</AvProp>
      <AvProp id="EXst" name="iQTAudioSampleSizeItem" type="int16">0</AvProp>
      <AvProp id="EXst" name="iQTDepth" type="int16">24</AvProp>
      <AvProp id="EXst" name="iUseBothFields" type="Boolean">TRUE</AvProp>
      <AvProp id="EXst" name="iSequentialFiles" type="Boolean">FALSE</AvProp>
      <AvProp id="EXst" name="iQTUseSourceCompression" type="Boolean">TRUE</AvProp>
      <AvProp id="ASET" name="attrList" type="reference">
        <AvClass id="ATTR">
          <AvProp id="ATTR" name="__OMFI:ATTR:NumItems" type="int32">136</AvProp>
          <List id="OMFI:ATTR:AttrRefs">
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_ASK_FILTER_MEDIA_VIDEO</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_ASK_FILTER_MEDIA_AUDIO</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_QUANTIZE_AUDIO_AUTOMATION</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">2</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AMAFI_2AllowVideo</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:StringAttribute" type="string">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">2</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AMAFI_2AllowAudio</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:StringAttribute" type="string">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">2</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AMAFI_2SameAsSourceHint</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:StringAttribute" type="string">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">2</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AMAFI_2VidoEncoding</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:StringAttribute" type="string">{"properties":[{"name":"custom.AspectRatio","value":"16//9","type":""},{"name":"custom.CodingEquations","value":"04010101-0202-0000-060e-2b3404010101","type":""},{"name":"custom.ColorPrimaries","value":"04010101-0303-0000-060e-2b3404010106","type":""},{"name":"custom.ColorScaling","value":"0","type":""},{"name":"custom.RDD9Enabled","value":"0","type":""},{"name":"custom.ReformatOption","value":"0","type":""},{"name":"custom.TransferCharacteristic","value":"04010101-0102-0000-060e-2b3404010101","type":""},{"name":"descriptor.blackreferencelevel","value":"16","type":"aafUInt32"},{"name":"descriptor.characteristic","value":"709","type":""},{"name":"descriptor.componentwidth","value":"8","type":"aafUInt32"},{"name":"descriptor.compression","value":"04010202-7126-0000-060e-2b340401010d","type":"AUID"},{"name":"descriptor.displayheight","value":"1080","type":"aafUInt32"},{"name":"descriptor.displaywidth","value":"1920","type":"aafUInt32"},{"name":"descriptor.dominance","value":"0","type":"aafIndirect"},{"name":"descriptor.equations","value":"709","type":""},{"name":"descriptor.framelayout.asvalue","value":"0","type":"aafInt64"},{"name":"descriptor.horizontalsubsampling","value":"2","type":"aafUInt32"},{"name":"descriptor.openexrchromaticities","value":"709","type":""},{"name":"descriptor.pixelaspectratio","value":"1//1","type":""},{"name":"descriptor.preset","value":"dnx//hr//1272//422","type":""},{"name":"descriptor.sampledheight","value":"1080","type":"aafUInt32"},{"name":"descriptor.sampledwidth","value":"1920","type":"aafUInt32"},{"name":"descriptor.samplerate","value":"24//1","type":"Rational"},{"name":"descriptor.storedheight","value":"1080","type":"aafUInt32"},{"name":"descriptor.storedwidth","value":"1920","type":"aafUInt32"},{"name":"descriptor.type","value":"cdcidescriptor","type":"aafString"},{"name":"descriptor.verticalsubsampling","value":"1","type":"aafUInt32"},{"name":"descriptor.whitereferencelevel","value":"235","type":"aafUInt32"},{"name":"filemob.datadefinition","value":"picture","type":"aafString"}]}</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">2</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AMAFI_2SourceRaster</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:StringAttribute" type="string">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">2</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AMAFI_2AudioCodec</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:StringAttribute" type="string">{"properties":[{"name":"custom.MixMode","value":"1","type":""},{"name":"descriptor.audiosamplingrate","value":"48000//1","type":"Rational"},{"name":"descriptor.channels","value":"1","type":"aafUInt32"},{"name":"descriptor.compression","value":"04020201-0100-0000-060e-2b340401010a","type":"AUID"},{"name":"descriptor.quantizationbits","value":"24","type":"aafUInt32"},{"name":"filemob.datadefinition","value":"sound","type":"aafString"}]}</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AMAFI_EXPORT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">2</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_DOMINANCE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_EXPORTFORMAT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">9</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_EXPORTVERSION</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">512</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_MEDIATYPES</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">3</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_VIDEOFORMAT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">2</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_HIIPSETTINGS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:StringAttribute" type="string"></AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_AUDIOSRATE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">-1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_AUDIOFORMAT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">3</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_EXPORTAUDIOSAMPLESIZE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">-1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QT_SPIT_SUBTYPE_TAG</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QT_SPIT_MANUFACTURER_TAG</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_RESIZECHOICE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QTREF_RENDERVIDEOEFFECTS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QTREF_MIXDOWNAUDIO</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QTREF_FILLBLACK</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QTREF_NETWORKREFERENCES</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QTREF_CREATESHARES</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QTREF_AVIDDVCODEC</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_QTREF_SAMPLERATE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">-1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_QTREF_SAMPLESIZE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">-1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_QTREF_AUDIOFORMAT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">4</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_QTREF_ASPECTRATIO</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">3</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_QTREF_DEFAULTS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">2</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QTREF_FLATTENVIDEOTRACKS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QTEXP_MAKEPROGRESSIVEDOWNLOAD</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QTEXP_EXPORTCUTS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QTEXP_APPLYMATRIX</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QTEXP_MATRIXTYPE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_QTEXP_EXPORTTIMECODE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">_EXPORTACTIVETAB</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTVIDEOLINK</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTAUDIOLINK</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTVIDEOHANDLELEN</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">60</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTAUDIOHANDLELEN</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">60</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_AINCRENDEREFFECTS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTAUNIVERSALSAMPLERATE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTAUNIVERSALFILEFORMAT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_QTAVISAMPLERATE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">-1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_QTAVIAUDIOFORMAT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">4</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_QTAVISAMPLESIZE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">-1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_OMFAAFSAMPLERATE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">-1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_OMFAAFAUDIOFORMAT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">4</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_OMFAAFSAMPLESIZE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">-1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_AAFAUDIOFORMAT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">4</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTRENDERAUDIOFX</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTRENDERVIDEOFX</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTMIXDOWAUDIOFX</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTMIXDOWNAUDIOTRKLIM</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTMIXDOWVIDEOTO1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTAUNIVERSALSAMPLESIZE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTTRANSCODEVIDEO</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTTARGETTRANSCODEVCID</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">3485</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTTARGETENCODINGPROFILE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTTARGETTRANSCODEDOMAIN</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTUSEFORAVIDLINKSPT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTAAFEDITPROTOCOL</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTAAFOMFCOMPATIBLEIDS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_EXPORTBITRATE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">7800000</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_ASPECT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">2</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_PROFILE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">256</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_LEVEL</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">4096</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_HDVVIDEOQUAL</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_HDVSTREAMTYPE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_ENCODING_MODE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_PIXELFORMAT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_GOPLENGTH</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">15</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_SEARCHRANGE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">3</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_SCENECHANGE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">2</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_FIELDTOPNESS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_STREAMTYPE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_AUDIOCODEC</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_AUDIODATARATE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_MPEG2_OUTPUTSTATS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_EXPORTLOCATORFRAMES</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_USE_TOPMOST_IMAGE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_USE_LOCATOR_COMMENT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_XDCAM_VIDEO_FORMAT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">4</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_XDCAM_AUDIO_BIT_DEPTH</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">16</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_XDCAM_ASPECT_RATIO</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_XDCAM_FORCE_REENCODE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">4</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTVIDEOCOPYDEST_UTF8</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobSize" type="int32">6</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobData" type="bytes">6 0 0 43 3a 5c 0 </AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">2</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTVIDEOCOPYDEST</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:StringAttribute" type="string">C:\</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">4</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTAUDIOCOPYDEST_UTF8</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobSize" type="int32">6</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobData" type="bytes">6 0 0 43 3a 5c 0 </AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">2</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTAUDIOCOPYDEST</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:StringAttribute" type="string">C:\</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">4</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTPUBLISHCOPYDEST_UTF8</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobSize" type="int32">35</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobData" type="bytes">35 0 0 43 3a 5c 55 73 65 72 73 5c 72 73 61 63 69 5c 4f 6e 65 44 72 69 76 65 5c 44 65 73 6b 74 6f 70 5c 0 </AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">2</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTPUBLISHCOPYDEST</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:StringAttribute" type="string">C:\Users\rsaci\OneDrive\Desktop\</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">4</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTAUDIOVOLUME_UTF8</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobSize" type="int32">18</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobData" type="bytes">18 0 0 4e 65 77 20 56 6f 6c 75 6d 65 20 28 44 3a 29 0 </AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">2</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTAUDIOVOLUME</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:StringAttribute" type="string">New Volume (D:)</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">4</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTVIDEOVOLUME_UTF8</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobSize" type="int32">18</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobData" type="bytes">18 0 0 4e 65 77 20 56 6f 6c 75 6d 65 20 28 44 3a 29 0 </AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">2</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ES_EXPORTVIDEOVOLUME</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:StringAttribute" type="string">New Volume (D:)</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_AUDIO_MODE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">5</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_USE_MARKS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_USE_ENABLED_TRACKS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_EXPORT_INACTIVE_AUDIO</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_ENABLE_MASK_MARGINS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_QT_CODEC_TYPE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1919706400</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_QT_TEMP_QUALITY</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">768</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_QT_SPAC_QUALITY</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">768</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_QT_DEST_WIDTH</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1920</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_QT_DEST_HEIGHT</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1080</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_COLOR_LEVEL</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">4</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_SEQ_FRAME_RATE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobSize" type="int32">8</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobData" type="bytes">8 0 0 0 0 0 0 38 40 </AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">4</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_QT_FRAME_RATE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobSize" type="int32">8</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:BobData" type="bytes">8 0 0 0 0 0 0 0 0 </AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_QT_MOVIE_PREVIEW</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_QT_XPLATFORM_MOV</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_QT_KEYFRAME_RATE</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">30</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_QT_DEPTH</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">24</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_QT_USE_BOTH_FIELDS</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_SEQ_FILES</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_ES_USE_SOURCE_COMPR</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_EXPORT_USE_AUDIO_MAPPING</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">ATN_EXPORT_EXPORT_REVEAL_FILES</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Audio_Mixdown_Top</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Audio_Mixdown_Master</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Audio_Mixdown_Tracks</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">2</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Video_Destination</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Video_Mixdown</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Video_Mixdown_Type</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Video_Same_Folder</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Video_MCSettings</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Audio_Destination</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Audio_Mixdown</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Audio_Same_Folder</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Audio_MCSettings</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">1</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Audio_RemoveTrackEffects</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem>
              <AvProp id="ATTR" name="OMFI:ATTB:Kind" type="int32">1</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:Name" type="string">AAF_Audio_SplitTracks</AvProp>
              <AvProp id="ATTR" name="OMFI:ATTB:IntAttribute" type="int32">0</AvProp>
            </ListElem>
            <ListElem/>
          </List>
        </AvClass>
      </AvProp>
    </AvClass>
  </Avid:XMLFileData>

</Avid:StreamItems>
`;