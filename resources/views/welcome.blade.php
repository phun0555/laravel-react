<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ยินดีต้อนรับ</title>
</head>
<body>
    <h1>ดีครับ, {{ $name }}!</h1>
    <p>ยินดีต้อนรับสู่เว็บไซต์ของเรา</p>

    @if (count($items) > 0)
        <h2>รายการสินค้า:</h2>
        <ul>
            @foreach ($items as $item)
                <li>{{ $item }}</li>
            @endforeach
        </ul>
    @else
        <p>ไม่มีสินค้าในขณะนี้</p>
    @endif
</body>
</html>