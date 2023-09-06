<script>
    document.querySelector('a[href="#"]').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#').scrollIntoView({
            behavior: 'smooth'\
        });
    });
</script>
