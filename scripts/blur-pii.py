#!/usr/bin/env python3
"""Blurs personal-data columns in docs/img screenshots (fixed 1440x900 viewport).
Idempotent only on fresh captures: run `npm run capture` first, then this."""
from pathlib import Path
from PIL import Image, ImageFilter

IMG = Path(__file__).resolve().parent.parent / "docs" / "img"
# (x0, y0, x1, y1) in px; rows start below the grid header.
REGIONS = {
    "webapp-configuracion-persona.png": [(280, 285, 400, 705),    # Identificación
                                         (410, 285, 600, 705),    # Nombre
                                         (830, 285, 995, 705),    # Dirección
                                         (1005, 285, 1115, 705),  # Teléfono
                                         (1125, 285, 1275, 705)], # Correo
    "webapp-usuarios.png": [(280, 235, 570, 655),    # Nombre
                            (580, 235, 875, 655),    # Apellido
                            (885, 235, 1235, 655)],  # Correo
}
for name, boxes in REGIONS.items():
    p = IMG / name
    if not p.exists():
        print("missing", name); continue
    im = Image.open(p).convert("RGB")
    for b in boxes:
        im.paste(im.crop(b).filter(ImageFilter.GaussianBlur(7)), b[:2])
    im.save(p, optimize=True)
    print("blurred", name)
