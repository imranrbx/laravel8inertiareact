<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>{{ $title ?? 'Document' }}</title>
	<link rel="stylesheet" href="{{ mix('css/app.css') }}">
	<script src="{{ mix('js/app.js') }}" defer></script>
</head>
<body>
	<div style="display:none" id="loader" class="w-100 vh-100 justify-content-center align-items-center">
		<img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif" alt="loading">
	</div>
	@inertia
</body>
</html>