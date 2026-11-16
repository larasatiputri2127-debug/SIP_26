var wms_layers = [];


        var lyr_POSITRONnolabel_0 = new ol.layer.Tile({
            'title': 'POSITRON no label',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}.png?key=cb1_3usm_1_0d7e153a37374395c55bee13'
            })
        });
var format_aksesibilitas_univunion_1 = new ol.format.GeoJSON();
var features_aksesibilitas_univunion_1 = format_aksesibilitas_univunion_1.readFeatures(json_aksesibilitas_univunion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aksesibilitas_univunion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitas_univunion_1.addFeatures(features_aksesibilitas_univunion_1);
var lyr_aksesibilitas_univunion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitas_univunion_1, 
                style: style_aksesibilitas_univunion_1,
                popuplayertitle: 'aksesibilitas_univ — union',
                interactive: true,
    title: 'aksesibilitas_univ — union<br />\
    <img src="styles/legend/aksesibilitas_univunion_1_0.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/aksesibilitas_univunion_1_1.png" /> 2,4km (30 menit)<br />' });
var format_PTNSRBY_2 = new ol.format.GeoJSON();
var features_PTNSRBY_2 = format_PTNSRBY_2.readFeatures(json_PTNSRBY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTNSRBY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTNSRBY_2.addFeatures(features_PTNSRBY_2);
var lyr_PTNSRBY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTNSRBY_2, 
                style: style_PTNSRBY_2,
                popuplayertitle: 'PTN SRBY',
                interactive: true,
                title: '<img src="styles/legend/PTNSRBY_2.png" /> PTN SRBY'
            });

lyr_POSITRONnolabel_0.setVisible(true);lyr_aksesibilitas_univunion_1.setVisible(true);lyr_PTNSRBY_2.setVisible(true);
var layersList = [lyr_POSITRONnolabel_0,lyr_aksesibilitas_univunion_1,lyr_PTNSRBY_2];
lyr_aksesibilitas_univunion_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_PTNSRBY_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Rank QS WUR': 'Rank QS WUR', 'Tahun pendirian': 'Tahun pendirian', 'Fakultas': 'Fakultas', 'Foto': 'Foto', });
lyr_aksesibilitas_univunion_1.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_PTNSRBY_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Rank QS WUR': 'TextEdit', 'Tahun pendirian': 'Range', 'Fakultas': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_aksesibilitas_univunion_1.set('fieldLabels', {'fid': 'no label', 'Access': 'no label', });
lyr_PTNSRBY_2.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kampus': 'inline label - always visible', 'Rank QS WUR': 'inline label - always visible', 'Tahun pendirian': 'inline label - always visible', 'Fakultas': 'inline label - always visible', 'Foto': 'inline label - always visible', });
lyr_PTNSRBY_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});