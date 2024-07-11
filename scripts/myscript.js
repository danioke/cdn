  $(function() {
    $('input').on("input change", function() {
      // zakat penghasilan
        var pp = parseInt($('input[name=pendapatan_perbulan]').val().replace(/\./g, ""));
        var pl = parseInt($('input[name=pendapatan_lain]').val().replace(/\./g, ""));
        // var hc = parseInt($('input[name=cicilan]').val().replace(/\./g, ""));
        var rs = parseInt(pp)+parseInt(pl);
        if(isNaN(rs)){
          rs = 0
        }
        $('input[name=jumlah_penghasilan]').val(formatNumber(rs));

        // var ms = parseInt($('input[name=harga_emas]').val().replace(/\./g, ""));
        // var ns = Math.ceil((ms*85)/12);
        // $('input[name=txt_nishab]').val(formatNumber(ns));

        //zakat perusahaan industri
        let ak = parseInt($('input[name=zakper_aktiva]').val().replace(/\./g, ""));
        let ps = parseInt($('input[name=zakper_pasiva]').val().replace(/\./g, ""));
        let zp = Math.ceil(ak-ps);
        if(isNaN(zp)){
          zp = 0
        }
        // console.log(ak,ps,zp);
        $('input[name=jml_omset]').val(formatNumber(zp));

        //zakat perdagangan
        let al = parseInt($('#aset_lancar').val().replace(/\./g, ""));
        let lb = parseInt($('#laba').val().replace(/\./g, ""));
        // let cc = parseInt($('#hutang').val().replace(/\./g, ""));
        let jm = al + lb;
        if(isNaN(jm)){
          jm = 0
        }
        // console.log(al,lb,cc,jm);
        $('#jumlah_aset').val(formatNumber(jm));
        // let em = parseInt($('#harga_emas2').val().replace(/\./g, ""));
        // let ni = em * 85;
        // $('#haul_nishab').val(formatNumber(ni));

        //zakat Emas
        // let hm = parseInt($('#harga_emas3').val().replace(/\./g, ""));
        // let nm = hm * 85;
        // $('#haul_nishab2').val(formatNumber(nm));
    });
  });

  function hitungPenghasilan() {
    // var emas = parseInt($('input[name=harga_emas]').val().replace(/\./g, ""));
    // var nishab = Math.ceil((emas*85)/12);
    var nisab = parseInt($('input[name=txt_nishab]').val().replace(/\./g, ""));
    var tp = parseInt($("input[name=jumlah_penghasilan").val().replace(/\./g, "")); 

    var total = Math.ceil(parseInt(tp) * (0.025));
    // console.log(emas, nishab, tp);
    if (tp < nisab) {
      $(".under_nishab").show();
      $(".zakat_penghasilan").hide();
      // $(".btn_hitung_penghasilan").hide();
      // $(".btn_reset_penghasilan").show();
    } else{
      $(".zakat_penghasilan").show();
      $(".under_nishab").hide();
      $("input[name=total_zakat]").val(formatNumber(total));
      $(".btn_hitung_penghasilan").hide();
      $(".btn_bayar_penghasilan").show();
    }
  }

  function resetPenghasilan(argument) {
    $("input[name=pendapatan_perbulan],input[name=pendapatan_lain],input[name=cicilan],input[name=jumlah_penghasilan],input[name=total_zakat]").val(0);
    $(".btn_hitung_penghasilan").show();
    $(".btn_bayar_penghasilan").hide();
    $(".zakat_penghasilan").hide();
    $(".under_nishab").hide();
  }

  function formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

  function hitungZakperJasa() {
    let bruto = parseInt($('#pdp_pre_pajak').val().replace(/\./g, ""));
    var nisab_thn = parseInt($('input[name=txt_nishab_pertahun]').val().replace(/\./g, ""));

    if (bruto < nisab_thn) {
      $(".under_nishab").show();
      $(".total_zakper_jasa").hide();
      // $(".btn_hitung_penghasilan").hide();
      // $(".btn_reset_penghasilan").show();
    } else{
    $("input[name=zakper_jasa]").val(formatNumber(bruto*0.025));
    $(".total_zakper_jasa").show();
    $(".btn_bayar_zakper").show();
    $(".btn_zakper_jasa").hide();
    }
  }

  function resetZakperJasa() {
    $("#pdp_pre_pajak, input[name=zakper_jasa]").val(0);
    $(".btn_bayar_zakper").hide();
    $(".btn_zakper_jasa").show();
    $(".total_zakper_jasa").hide();
    $(".under_nishab").hide();
  }

  function hitungZakperNiaga() {
    let tp = parseInt($('input[name=jml_omset]').val().replace(/\./g, ""));
    // console.log(tp*0.025);
    var nisab_thn = parseInt($('input[name=txt_nishab_pertahun]').val().replace(/\./g, ""));

    if (tp < nisab_thn) {
      $(".under_nishab").show();
      $(".total_zakper_niaga").hide();
      // $(".btn_hitung_penghasilan").hide();
      // $(".btn_reset_penghasilan").show();
    } else{
    $("#jml_zakper_niaga").val(formatNumber(tp*0.025));
    $(".total_zakper_niaga").show();
    $(".btn_bayar_niaga").show();
    $(".btn_zakper_niaga").hide();
    }
  }

  function resetZakperNiaga() {
    $("input[name=zakper_aktiva], input[name=zakper_pasiva], input[name=jml_omset]").val(0);
    $(".btn_bayar_niaga").hide();
    $(".btn_zakper_niaga").show();
    $(".total_zakper_niaga").hide();
    $(".under_nishab").hide();
  }

  function hitungZakPerdagangan() {
    let zp = parseInt($('#jumlah_aset').val().replace(/\./g, ""));
    let hn = parseInt($('#haul_nishab').val().replace(/\./g, ""));
    if (zp < hn) {
      $(".nishab_zak").show(); 
      $(".zakat_perdagangan").hide();
    } else{      
      $("#jml_zak_per").val(formatNumber(zp*0.025));
      $(".zakat_perdagangan").show();
      $(".btn_bayar_perdagangan").show();
      $(".btn_zak_per").hide();
    }
  }

  function resetZakPerdagangan() {
    $("#aset_lancar, #laba, #hutang, #jumlah_aset, #harga_emas2, #jml_zak_per").val(0);
    $(".btn_bayar_perdagangan").hide();
    $(".btn_zak_per").show();
    $(".zakat_perdagangan").hide();
    $(".nishab_zak").hide(); 
  }

  function hitungZakEmas() {
    let zm = parseInt($('#txt_emas').val().replace(/\./g, ""));
    let hn2 = parseInt($('#haul_nishab2').val().replace(/\./g, ""));
    if (zm < hn2) {
      $(".info_nishab").show();
      $(".jml_zak_ms").hide();
    } else{      
      $("#jml_zak_ms").val(formatNumber(zm*0.025));
      $(".jml_zak_ms").show();
      $(".btn_bayar_ms").show();
      $(".btn_zak_ms").hide();
    }
  }

  function resetZakEmas() {
    $("#txt_emas, #jml_zak_ms").val(0);
    $(".btn_bayar_ms").hide();
    $(".btn_zak_ms").show();
    $(".jml_zak_ms").hide();
    $(".info_nishab").hide();
  }

  function bayarSedekah() {
    window.location = 'https://baznas.go.id/sedekahbaznas';
  }

  function bayarZakat(type) {
    if (type == 'zakpro') {
      var jns = 'profesi';
      var jml = $("input[name=total_zakat]").val();
    } else if (type == 'zakPerJasa') {
      var jns = 'maal';
      var jml = $("input[name=zakper_jasa]").val();
    } else if (type == 'zakPerNiaga') {
      var jns = 'maal';
      var jml = $("#jml_zakper_niaga").val();
    } else if (type == 'zakPer') {
      var jns = 'maal';
      var jml = $("#jml_zak_per").val();
    } else if (type == 'emas') {
      var jns = 'maal';
      var jml = $("#jml_zak_ms").val();
    } else{
      var jns = '';
      var jml = 0;
    }
    
    window.location = 'https://baznas.go.id/bayarzakat?jenis='+jns+'&param1=0&param2=0&param3=0&param4=0&jumlah='+jml+'';
  }



  function formatRupiah(angka, prefix){
      var number_string = angka.replace(/[^,\d]/g, '').toString(),
      split       = number_string.split(','),
      sisa        = split[0].length % 3,
      rupiah        = split[0].substr(0, sisa),
      ribuan        = split[0].substr(sisa).match(/\d{3}/gi);
     
      // tambahkan titik jika yang di input sudah menjadi angka ribuan
      if(ribuan){
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
      }
 
      rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
      return prefix == undefined ? rupiah : (rupiah ? '' + rupiah : '');
    }

$(".uang2").keyup(function(e) {
            var nilai = formatRupiah($(this).val(), '');
            $(this).val(nilai.replace(/^0+/, ''));
        })
