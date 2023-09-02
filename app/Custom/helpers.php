<?php
// não colocar namespace aqui
use illuminate\Support\Str;
class HtmlHelper
{
    public static function mix_version($path)
    {
        $filePath = public_path($path);
        $version = file_exists($filePath) ? filemtime($filePath) : Str::random(5) . rand(10, 99);
        return $path . ($version ? "?v=" . $version . Str::random(5) . rand(10, 99) : '');
    }

    public static function htmlResources($links = [], $type = 'link')
    {
        $html = '';
        $crossOrigin = 'anonymous';
        if ($type === 'link') {
            foreach ($links as $link) {
                $html .= "<link href='$link' rel='stylesheet' />";
            }
        } else {
            foreach ($links as $link) {
                $crossAttr = (strpos($link, 'http://') !== false || strpos($link, 'https://') !== false) ? " crossorigin='$crossOrigin'" : "";
                $html .= "<script src='$link' type='text/javascript'$crossAttr></script>\n";
            }
        }

        return $html;
    }
}
