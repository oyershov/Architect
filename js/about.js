$(document).ready(function() {
    if ($(window).width() >= '1600' ) {
        $("#content > div").append('<div id="l1" style="display:inline-block"><p style="font-size: 22px; margin-top: 0px; text-align: center;">��������� �����</p><p class="space">��������� ������������ �������� ���������������� ��������� � �����������.</p><br /><strong>��� ������ �����������:</strong><p class="space">1. ���������� - ��������-����������� ��������� ��������.</p><p class="space">2. ������� - ����������-��������.</p><br /><strong>���� ������:</strong><br /><p class="space">������������ ������-����������������� ��������������� ����� �������. (1999 - 2006)</p>������������� - ����������� ��������� �������� III ���������.<br /><br /><p class="space">���� ������������� ������ ����������� �.�.� (2007 � 2014)</p>������������� � ����������, ������� ����������.<br /><strong>�������:</strong><p class="space">1. ����-�����.</p><p class="space">2. ������ - ����. �������������� ������� �����������.</p><p class="space">3. �������������� ���������� ������. ���������� ������.</p><p class="space">4. ����� ����� �������� � �������������. ������� ���������, ���������, ����������, �������� ����������. �������� ���� �� ����������� ����������.</p><p class="space">5. �������� � �����, �����. �������������� �������.</p><p class="space">6. �������������� �������� ������� � �����. ���������� ������.</p><p class="space">7. ��������� �� ����������� ����������. ������� ���������, ���������, �������� ����������.</p><p class="space">��� "����". (2009 � 2016)</p>������������� - ����������.<br /><strong>�������:</strong><p class="space">1. ���������� ������� � ������ �. ����� � ����� 2012�</p><p class="space">2. �������������� ����. ������� ������� ����� � ����������, ���������, ���������, �������� ������.</p><br /><p class="space">���������������һ. (2012 � 2016)</p><strong>�������:</strong><p class="space">1. ����� � �����. �������. ������������� �������.</p><p class="space">2. ����� � ������. �������. ���������� ������.</p><br />�������������� ������ ����������. 2009 � 20...</div>');
    }  
    else {
        $("#content > div").append('<div id="l1" style="display:inline-block"><p style="font-size: 22px; margin-top: 0px; text-align: center;">��������� �����</p><p class="space">��������� ������������ �������� ���������������� ��������� � �����������.</p><br /><strong>��� ������ �����������:</strong><p class="space">1. ���������� - ��������-����������� ��������� ��������.</p><p class="space">2. ������� - ����������-��������.</p><br /><strong>���� ������:</strong><br /><p class="space">������������ ������-����������������� ��������������� ����� �������. (1999 - 2006)</p>������������� - ����������� ��������� �������� III ���������.<br /><br /><p class="space">���� ������������� ������ ����������� �.�.� (2007 � 2014)</p>������������� � ����������, ������� ����������.<br /><strong>�������:</strong><p class="space">1. ����-�����.</p><p class="space">2. ������ - ����. �������������� ������� �����������.</p><p class="space">3. �������������� ���������� ������. ���������� ������.</p><p class="space">4. ����� ����� �������� � �������������. ������� ���������, ���������, ����������, �������� ����������. �������� ���� �� ����������� ����������.</p><p class="space">5. �������� � �����, �����. �������������� �������.</p><p class="space">6. �������������� �������� ������� � �����. ���������� ������.</p><p class="space">7. ��������� �� ����������� ����������. ������� ���������, ���������, �������� ����������.</p><br /><a href="#" onclick="page(2)" id="hf1" style="text-decoration:none; color: #970102;">������ �����</a></div>');
        $("#content > div").append('<div id="l2" style="display:none"><p class="space">��� "����". (2009 � 2016)</p>������������� - ����������.<br /><strong>�������:</strong><p class="space">1. ���������� ������� � ������ �. ����� � ����� 2012�</p><p class="space">2. �������������� ����. ������� ������� ����� � ����������, ���������, ���������, �������� ������.</p><br /><p class="space">���������������һ. (2012 � 2016)</p><strong>�������:</strong><p class="space">1. ����� � �����. �������. ������������� �������.</p><p class="space">2. ����� � ������. �������. ���������� ������.</p><br />�������������� ������ ����������. 2009 � 20...<br /><br /><a href="#" onclick="page(1)" id="hf2" style="text-decoration:none; color: #970102;">�����</a></div>');
    }
});

function page (i) {
    if(i=='1'){
        $("#l1").css('display','inline-block');
        $("#l2").css('display','none');
        
    }
    else if(i=='2'){ 
        $("#l1").css('display','none');
        $("#l2").css('display','inline-block');
    }
}