export function dashboardFunction() {
    new ApexCharts(document.querySelector('#pieChart'), {
        series: [44, 55, 13, 43],
        chart: {
            height: 350,
            type: 'pie',
            toolbar: {
                show: true,
            },
        },
        labels: ['قيد التوصيل', 'تم الدفع', 'في الانتظار', 'تم ارجاعة'],
    }).render();

    new ApexCharts(document.querySelector('#polarAreaChart'), {
        series: [14, 23, 21, 17],
        chart: {
            type: 'polarArea',
            height: 350,
            toolbar: {
                show: true,
            },
        },
        labels: ['اليمن', 'الاردن', 'العراق', 'مصر'],
        stroke: {
            colors: ['#fff'],
        },

        fill: {
            opacity: 0.8,
        },
    }).render();
}
